import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import type { Reactify, ReactifiedModule } from '@yandex/ymaps3-types/reactify';
import ReactDOM from 'react-dom';
import { usePrevious } from 'hooks/usePrevious';

export type MapDataType = ReactifiedModule<typeof ymaps3>;
export type ControlDataType = ReactifiedModule<typeof import('@yandex/ymaps3-default-ui-theme')>;

type RawDataType = {
  reactify: Reactify
  ymaps: typeof ymaps3,
};

type WithMapProps = {
  mapData: null | undefined | MapDataType,
  controlData: null | undefined | ControlDataType,
};

const SCRIPT_ID = 'ymaps';
const MAP_LOCALES = {
  en: 'en_US',
  ru: 'ru_RU',
} as const;

window.ymapsLocalized = {
  [MAP_LOCALES.en]: undefined,
  [MAP_LOCALES.ru]: undefined,
};

export function withMap<T>(
  WrappedComponent: React.ComponentType<T & WithMapProps>
) {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const ComponentWithMap = (props: Omit<T, keyof WithMapProps>) => {
    const [data, setData] = useState<null | undefined | RawDataType>();
    const [controlData, setControlData] = useState<null | undefined | ControlDataType>();
    const [forceUpdateCounter, setForceUpdateCounter] = useState(0);

    const { i18n } = useTranslation();
    const selectedLanguage = i18n.language.split('-')[0] as LanguageType;
    const mapLocale = selectedLanguage === 'ru' ? 'ru_RU' : 'en_US';

    const prevMapLocale = usePrevious(mapLocale);

    const isMapsScriptAdded = useRef(false);

    useEffect(() => {
      if (prevMapLocale !== undefined && mapLocale !== prevMapLocale) {
        setData(undefined);
        setControlData(undefined);

        setTimeout(() => {
          isMapsScriptAdded.current = false;
          setForceUpdateCounter((prev) => prev + 1);
        }, 0);
      }
    }, [prevMapLocale, mapLocale]);

    const mapData = useMemo(() => {
      if (data) {
        const { reactify } = data;
        return reactify.module(data.ymaps);
      }

      return data;
    }, [data]);

    useEffect(() => {
      const fetchUI = async () => {
        if (data) {
          const { reactify } = data;
          const uiReactify = await ymaps3.import('@yandex/ymaps3-default-ui-theme');
          const reactifiedControlData = reactify.module(uiReactify);
          setControlData(reactifiedControlData);
        } else {
          setControlData(data === null ? null : undefined);
        }
      };

      fetchUI();
    }, [data]);

    useEffect(() => {
      if (!isMapsScriptAdded.current) { // NOTE [RP] 2024-10-02: react dev double rendering
        isMapsScriptAdded.current = true;
        const oldScript = document.getElementById(SCRIPT_ID);
        if (oldScript) {
          oldScript.remove();
          window.ymaps3 = undefined;
        }

        if (!window.ymapsLocalized[mapLocale]) {
          const script = document.createElement('script');
          document.body.appendChild(script);
          script.id = SCRIPT_ID;
          script.type = 'text/javascript';
          script.src = `https://api-maps.yandex.ru/v3/?apikey=e62d2015-f83b-49d5-a267-6a3d74ba594e&lang=${mapLocale}`;
          script.onload = async () => {
            const ymaps = window.ymaps3;
            await ymaps!.ready;
            const ymaps3Reactify = await ymaps!.import('@yandex/ymaps3-reactify');
            ymaps!.import.registerCdn('https://cdn.jsdelivr.net/npm/{package}', ['@yandex/ymaps3-default-ui-theme@latest']);
            const reactify = ymaps3Reactify.reactify.bindTo(React, ReactDOM);

            const newData = { reactify, ymaps: ymaps! };

            window.ymapsLocalized[mapLocale] = newData;

            setData(newData);
          };
          script.onerror = () => {
            setData(null);
          };

          isMapsScriptAdded.current = true;
        } else {
          window.ymaps3 = window.ymapsLocalized[mapLocale].ymaps;
          setData(window.ymapsLocalized[mapLocale]);
        }
      }
    }, [mapLocale, forceUpdateCounter]);

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <WrappedComponent {...(props as T)} mapData={mapData} controlData={controlData} />;
  };

  ComponentWithMap.displayName = `withMap(${displayName})`;

  return ComponentWithMap;
}

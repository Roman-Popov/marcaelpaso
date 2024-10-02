import type { Reactify } from '@yandex/ymaps3-types/reactify';

export {};

declare global {
  type Printable = string | number;

  type LanguageType = 'ru' | 'es' | 'en';

  type WeekdayType = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

  interface Window {
    ymaps3: typeof ymaps3 | undefined,
    isMapsScriptAdded: boolean | undefined,
    ymapsLocalized: {
      'en_US': undefined | { ymaps: typeof ymaps3, reactify: Reactify },
      'ru_RU': undefined | { ymaps: typeof ymaps3, reactify: Reactify },
    }
  }
}

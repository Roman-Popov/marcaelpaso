import type { UseTranslationResponse } from 'react-i18next';
import type { RawPriceType, TransType } from '../../prices-types';

export const formatRawPriceObject = <T, V>(
  rawPriceObject: RawPriceType<T, V>,
  basePrice: number,
  trans: UseTranslationResponse<'translation', undefined>
) => {
  const { t, i18n } = trans;
  const lang = i18n.language.split('-')[0] as LanguageType;
  const { validity } = rawPriceObject;

  const formattedPriceObject = {
    title: ((rawPriceObject.title as null | TransType)?.[lang] ?? null) as T extends TransType ? string : null,
    amount: rawPriceObject.amount,
    validity: String(validity
      ? t('prices.month', { count: Number(validity) })
      : '—'),
    price: {
      current: rawPriceObject.price,
      basePrice: basePrice * rawPriceObject.amount,
    },
  };

  return formattedPriceObject;
};

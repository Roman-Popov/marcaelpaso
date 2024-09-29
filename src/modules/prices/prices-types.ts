export type RawPriceType<T, V> = {
  title: T,
  amount: number,
  validity: V,
  price: number
};

export type TransType = {
  en: string,
  es: string,
  ru: string,
};

export type RawPricesDataType = {
  trial: RawPriceType<null, null>,
  oneTime: RawPriceType<null, null>,
  subscriptions: RawPriceType<TransType, number>[],
};

export type ComparePriceData = {
  current: number,
  basePrice: number,
};

type PriceType<T> = {
  title: T,
  amount: number,
  validity: string,
  price: ComparePriceData,
};

export type PricesDataType = {
  trial: PriceType<null>,
  oneTime: PriceType<null>,
  subscriptions: PriceType<string>[],
};

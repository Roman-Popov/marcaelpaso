import React, { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, Container } from '@mui/material';
import { configureRequest, type MaybeCancelError } from 'utils/configure-request';
import { TabletAndBelow, Desktop } from 'components/responsive-wrappers';
import { formatRawPriceObject } from './utils/format-raw-price-object';
import { PRICES_ENDPOINT } from './prices-endpoint';
import { DesktopPrices } from './desktop-prices';
import { MobilePrices } from './mobile-prices';
import type { RawPricesDataType } from './prices-types';

const Prices = () => {
  const [rawPricesData, setRawPricesData] = useState<null | undefined | RawPricesDataType>();

  useEffect(() => {
    const { sendMessage, cancel } = configureRequest();

    const fetchData = async () => {
      try {
        const { data } = await sendMessage({ endpoint: PRICES_ENDPOINT });

        setRawPricesData(data);
      } catch (error) {
        if (!(error as MaybeCancelError).isCanceled) {
          setRawPricesData(null);
        }
      }
    };

    fetchData();
    return () => {
      cancel();
    };
  }, []);

  const trans = useTranslation();

  const pricesData = useMemo(() => {
    if (!rawPricesData) {
      return rawPricesData;
    }

    const basePrice = rawPricesData.oneTime.price;

    return {
      trial: formatRawPriceObject(rawPricesData.trial, basePrice, trans),
      oneTime: formatRawPriceObject(rawPricesData.oneTime, basePrice, trans),
      subscriptions: rawPricesData.subscriptions
        .map((subscription) => formatRawPriceObject(subscription, basePrice, trans)),
    };
  }, [rawPricesData, trans]);

  return (
    <Container maxWidth="md">
      <Card sx={{ px: 1, pb: { xs: 1, sm: 2 } }}>
        <Desktop>
          <DesktopPrices pricesData={pricesData} />
        </Desktop>
        <TabletAndBelow>
          <MobilePrices pricesData={pricesData} />
        </TabletAndBelow>
      </Card>
    </Container>
  );
};

export const MemoizedPrices = React.memo(Prices);

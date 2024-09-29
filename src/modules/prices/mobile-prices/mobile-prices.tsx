import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Stack, Typography } from '@mui/material';
import { Mobile, Tablet } from 'components/responsive-wrappers';
import { NoDataBlock } from 'components/no-data-block';
import type { PricesDataType } from '../prices-types';
import { PricesRow } from './components/prices-row';
import { StyledCard } from './components/styled-card';

type MobilePricesProps = {
  pricesData: null | undefined | PricesDataType,
};

const MobilePrices = (props: MobilePricesProps) => {
  const { pricesData } = props;

  const { t } = useTranslation();

  const trial = pricesData?.trial;
  const oneTime = pricesData?.oneTime;
  const subscriptions = pricesData?.subscriptions;

  return (
    <Stack sx={{ px: { sm: 1 } }} spacing={2.5}>
      <Stack spacing={0.5}>
        <Typography fontWeight="bold" fontSize="1.15em" textAlign="center">
          {t('prices.singleVisit')}
        </Typography>
        {trial && oneTime
          ? (
            <>
              <Box pr={{ xs: 1, sm: 2 }}>
                <Typography fontSize="0.6em" textAlign="right">{t('prices.price')}</Typography>
              </Box>
              <StyledCard variant="outlined">
                <PricesRow title={t('prices.trial')} price={trial.price} />
              </StyledCard>
              <StyledCard
                variant="outlined"
                sx={(theme) => ({
                  borderColor: theme.palette.success.main,
                  '&:hover': {
                    boxShadow: `0 0 0 2px inset ${theme.palette.success.light}`,
                    ...(theme.palette.mode === 'dark'
                      ? { bgcolor: theme.palette.grey[900] }
                      : { }
                    ),
                  },
                })}
              >
                <PricesRow title={t('prices.regular')} price={oneTime.price} />
              </StyledCard>
              <Typography fontSize="0.9em" sx={{ px: 1.5, pt: 0.5 }}>{t('prices.trialDetailed')}</Typography>
            </>
          )
          : (
            <Box sx={{ px: 1 }}>
              <NoDataBlock type={pricesData === null ? 'error' : 'loading'} />
            </Box>
          )}
      </Stack>
      <Stack spacing={0.5}>
        <Typography fontWeight="bold" fontSize="1.15em" textAlign="center">
          {t('prices.subscriptions')}
        </Typography>
        {subscriptions
          ? (
            <>
              <Stack direction="row" spacing={2} sx={{ px: { xs: 1, sm: 2 }, justifyContent: 'end' }}>
                <Typography fontSize="0.6em" sx={{ pr: { xs: 0, sm: 2 } }}>{t('prices.validity')}</Typography>
                <Tablet>
                  <Box minWidth="9em">
                    <Typography fontSize="0.6em" textAlign="right">{t('prices.price')}</Typography>
                  </Box>
                </Tablet>
                <Mobile>
                  <Box minWidth="5em">
                    <Typography fontSize="0.6em" textAlign="right">{t('prices.price')}</Typography>
                  </Box>
                </Mobile>
              </Stack>
              {subscriptions.map((subscription, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <StyledCard key={index} variant="outlined">
                  <PricesRow
                    price={subscription.price}
                    title={t('prices.amountCount', { count: subscription.amount })}
                    validity={subscription.validity}
                  />
                </StyledCard>
              ))}
            </>
          )
          : (
            <Box sx={{ px: 1 }}>
              <NoDataBlock type={pricesData === null ? 'error' : 'loading'} />
            </Box>
          )}
      </Stack>
      <Stack spacing={0.5}>
        <Typography fontWeight="bold" fontSize="1.15em" textAlign="center">
          {t('prices.personalTitle')}
        </Typography>
        <StyledCard variant="outlined">
          <Typography fontSize="0.9em">{t('prices.personalText')}</Typography>
        </StyledCard>
      </Stack>
    </Stack>
  );
};

export const MemoizedMobilePrices = React.memo(MobilePrices);

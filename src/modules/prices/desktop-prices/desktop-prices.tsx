import * as React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Card,
  Grid2 as Grid,
  Typography,
} from '@mui/material';
import { NoDataBlock } from 'components/no-data-block';
import type { PricesDataType } from '../prices-types';
import { PricesColumn } from './components/prices-column';

type DesktopPricesProps = {
  pricesData: null | undefined | PricesDataType,
};

const DesktopPrices = (props: DesktopPricesProps) => {
  const { pricesData } = props;

  const { t } = useTranslation();

  if (!pricesData) {
    return (
      <Box sx={{ px: 1 }}>
        <NoDataBlock type={pricesData === null ? 'error' : 'loading'} />
      </Box>
    );
  }

  const { trial, oneTime, subscriptions } = pricesData;

  const titleColumnsCount = 1.75;
  const singleCount = 2;
  const subscriptionsCount = pricesData.subscriptions.length;
  const pricesCount = singleCount + subscriptionsCount;
  const columnsCount = titleColumnsCount + pricesCount;

  return (
    <Grid container columns={columnsCount}>
      <Grid
        offset={titleColumnsCount}
        size={singleCount}
        sx={{ borderRight: '1px solid', borderRightColor: 'divider' }}
      >
        <Typography
          fontWeight="bold"
          fontSize="1.15em"
          textAlign="center"
          sx={{
            borderBottom: '1px solid',
            borderBottomColor: 'divider',
            ml: 1,
            pr: 1,
          }}
        >
          {t('prices.singleVisit')}
        </Typography>
      </Grid>
      <Grid size={subscriptionsCount}>
        <Typography
          fontWeight="bold"
          fontSize="1.15em"
          textAlign="center"
          sx={{
            borderBottom: '1px solid',
            borderBottomColor: 'divider',
            mr: 1,
            pl: 1,
          }}
        >
          {t('prices.subscriptions')}
        </Typography>
      </Grid>
      <Grid size={titleColumnsCount}>
        <PricesColumn bold values={[t('prices.amount'), t('prices.validity'), t('prices.price')]} />
      </Grid>
      <Grid size={1}>
        <PricesColumn
          heading={t('prices.trial')}
          outlined
          values={[trial.amount, trial.validity, trial.price]}
        />
      </Grid>
      <Grid size={1} sx={{ borderRight: '1px solid', borderRightColor: 'divider' }}>
        <PricesColumn
          heading={t('prices.regular')}
          outlined
          highlighted
          values={[oneTime.amount, oneTime.validity, oneTime.price]}
        />
      </Grid>
      {subscriptions.map(({
        amount,
        price,
        title,
        validity,
      }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Grid size={1} key={index}>
          <PricesColumn outlined heading={title} values={[amount, validity, price]} />
        </Grid>
      ))}
      <Grid offset={titleColumnsCount} size={pricesCount}>
        <Typography fontSize="0.9em" sx={{ px: 1.5, pt: 1.5 }}>{t('prices.trialDetailed')}</Typography>
      </Grid>
      <Grid offset={titleColumnsCount} size={pricesCount}>
        <Typography
          fontWeight="bold"
          fontSize="1.15em"
          // textAlign="center"
          sx={{
            borderBottom: '1px solid',
            borderBottomColor: 'divider',
            mx: 1,
            pt: 3.5,
            px: 1.5,
          }}
        >
          {t('prices.personalTitle')}
        </Typography>
      </Grid>
      <Grid offset={titleColumnsCount} size={pricesCount}>
        <Card
          variant="outlined"
          sx={[
            {
              m: 1,
              mb: 0,
              py: 1,
              px: 1.5,
            },
            (theme) => ({
              '&:hover': {
                boxShadow: `0 0 0 2px inset ${theme.palette.divider}`,
                ...(theme.palette.mode === 'dark'
                  ? { bgcolor: theme.palette.grey[900] }
                  : {}
                ),
              },
            }),
          ]}
        >
          <Typography fontSize="0.9em">{t('prices.personalText')}</Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export const MemoizedDesktopPrices = React.memo(DesktopPrices);

import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import type { ComparePriceData } from '../../prices-types';

type PriceBlockProps = {
  price: ComparePriceData,
  direction?: 'row' | 'column',
};

const PriceBlock = (props: PriceBlockProps) => {
  const { price, direction = 'column' } = props;
  const { basePrice, current } = price;
  const isBasePrice = basePrice === current;

  return (
    <Stack
      direction={direction}
      spacing={direction === 'row' ? 1 : 0}
      sx={{ justifyContent: 'end', alignItems: 'center', width: '100%' }}
    >
      {!isBasePrice && (
      <Typography
        color="textDisabled"
        sx={{ textDecoration: 'line-through', width: '100%' }}
        fontSize="0.9em"
        fontWeight="bold"
        textAlign="right"
      >
        {`${basePrice}\u00A0₽`}
      </Typography>
      )}
      <Typography fontWeight="bold">{`${current}\u00A0₽`}</Typography>
    </Stack>
  );
};

export const MemoizedPriceBlock = React.memo(PriceBlock);

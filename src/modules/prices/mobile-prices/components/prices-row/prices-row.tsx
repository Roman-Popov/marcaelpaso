import * as React from 'react';
import {
  Box,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import { Mobile, Tablet } from 'components/responsive-wrappers';
import { PriceBlock } from '../../../components/price-block';
import type { ComparePriceData } from '../../../prices-types';

type PricesRowProps = {
  title: Printable,
  validity?: Printable,
  price: ComparePriceData,
};

const PricesRow = (props: PricesRowProps) => {
  const { title, validity, price } = props;

  return (
    <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'end' }}>
      <Typography fontWeight="bold">{title}</Typography>
      <Stack direction="row" spacing={{ xs: 1, sm: 2 }} alignItems="end">
        {Boolean(validity) && (
          <>
            <Typography>{validity}</Typography>
            <Divider orientation="vertical" flexItem />
          </>
        )}
        <Tablet>
          <Box sx={{ minWidth: '9em', display: 'inline-flex', justifyContent: 'center' }}>
            <PriceBlock direction="row" price={price} />
          </Box>
        </Tablet>
        <Mobile>
          <Box sx={{ minWidth: '5em', display: 'inline-flex', justifyContent: 'center' }}>
            <PriceBlock price={price} />
          </Box>
        </Mobile>
      </Stack>
    </Stack>
  );
};

export const MemoizedPricesRow = React.memo(PricesRow);

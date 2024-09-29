import * as React from 'react';
import {
  Box,
  Card,
  Stack,
  Typography,
} from '@mui/material';
import type { ComparePriceData } from '../../../prices-types';
import { PriceBlock } from '../price-block';
import { StyledPriceBox } from '../styled-price-box';

type PricesColumnProps = {
  bold?: boolean,
  heading?: string,
  highlighted?: boolean,
  outlined?: boolean,
  values: [Printable, Printable, Printable | ComparePriceData]
};

const PricesColumn = (props: PricesColumnProps) => {
  const {
    bold = false,
    heading,
    highlighted = false,
    outlined = false,
    values,
  } = props;

  return (
    <Box sx={{ p: 1, pb: 0 }}>
      <Card
        variant={outlined ? 'outlined' : 'elevation'}
        sx={[
          {
            py: 0,
            ...(outlined ? {} : { borderColor: 'transparent' }),
          },
          (theme) => ({
            ...(outlined && highlighted ? { borderColor: theme.palette.success.main } : {}),
            '&:hover': outlined
              ? {
                boxShadow: `0 0 0 2px inset ${outlined && highlighted
                  ? theme.palette.success.light
                  : theme.palette.divider
                }`,
                ...(theme.palette.mode === 'dark'
                  ? { bgcolor: theme.palette.grey[900] }
                  : { }
                ),
              }
              : {},
          }),
        ]}
      >
        <Stack>
          <StyledPriceBox
            sx={{
              pb: 0.25,
              '&:not(:empty)': {
                borderBottom: '1px solid',
                borderBottomColor: heading ? 'divider' : 'transparent',
              },
              height: 'auto',
              whiteSpace: 'pre',
            }}
          >
            <Typography fontWeight="bold" fontSize="0.6em">{heading || ' '}</Typography>
          </StyledPriceBox>
          {/* eslint-disable-next-line @typescript-eslint/default-param-last */}
          {values.map((value = '', index) => (
            // eslint-disable-next-line react/no-array-index-key
            <StyledPriceBox key={index} sx={index === 2 ? { alignItems: 'end', mb: 2 } : {}}>
              {typeof value === 'string' || typeof value === 'number'
                ? (<Typography fontWeight={bold ? 'bold' : 'normal'}>{value}</Typography>)
                : <PriceBlock price={value} />}
            </StyledPriceBox>
          ))}
        </Stack>
      </Card>
    </Box>
  );
};

export const MemoizedPricesColumn = React.memo(PricesColumn);

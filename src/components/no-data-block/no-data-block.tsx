import * as React from 'react';
import {
  Card,
  Grid2 as Grid,
  Skeleton,
  Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

type NoDataBlockProps = {
  type: 'loading' | 'error',
  fullHeight?: boolean,
  withoutBorder?: boolean,
};

const NoDataBlock = (props: NoDataBlockProps) => {
  const { type, fullHeight = false, withoutBorder = false } = props;

  const { t } = useTranslation();

  return (
    <Grid
      container
      size={4}
      columns={4}
      spacing={2}
      sx={{ ...(fullHeight ? { height: '100%' } : {}) }}
    >
      <Grid
        size={4}
        component={Card}
        sx={{
          p: 0,
          ...(withoutBorder ? { border: 'none' } : {}),
          ...(fullHeight ? { height: '100%' } : {}),
        }}
        variant="outlined"
      >
        {type === 'error'
          ? (
            <Typography
              height={fullHeight ? '100%' : 100}
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="error.light"
              fontWeight="bold"
              fontSize="1.15em"
              textAlign="center"
              whiteSpace="pre-line"
            >
              {t('serverInteraction.loadError')}
            </Typography>
          )
          : (
            <Skeleton
              variant="rectangular"
              animation="wave"
              sx={[
                {
                  height: fullHeight ? '100%' : 100,
                  transform: 'none',
                  borderRadius: 1,
                },
                (theme) => ({ bgcolor: alpha(theme.palette.grey[theme.palette.mode === 'dark' ? 700 : 200], 0.2) }),
              ]}
            />
          )}
      </Grid>
    </Grid>
  );
};

export const MemoizedNoDataBlock = React.memo(NoDataBlock);

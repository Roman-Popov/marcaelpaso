import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  alpha,
  Box,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material';

const StudioName = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Container maxWidth="md">
        <Box
          sx={{
            width: 'fit-content',
            mx: 'auto',
          }}
        >
          <Stack>
            <Typography
                // @ts-ignore
              variant="mainGreen"
              component="p"
              sx={{
                px: { xs: '0.75em', sm: '1em' },
                textAlign: 'center',
                fontSize: { xs: '4em', sm: '5em' },
              }}
            >
              {'Marca El\u00A0Paso'}
            </Typography>
            <Divider
              sx={{
                borderColor: 'transparent',
                boxShadow: '0 -2px 5px 1px #12ff00',
                mx: { xs: '1.5em', sm: '2.5em' },
              }}
            />
          </Stack>
          <Divider sx={(theme) => ({ borderColor: alpha(theme.palette.grey[100], 0.8), mt: '-1px' })} />
        </Box>
        <Typography
          variant="h2"
          textAlign="center"
          sx={{ py: { xs: 1, sm: 1.5 }, fontSize: { xs: '2.25em', sm: '2.75em' } }}
        >
          {t('header.name')}
        </Typography>
      </Container>
    </Box>
  );
};

export const MemoizedStudioName = React.memo(StudioName);

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
                lineHeight: 1,
                marginBottom: '0.7rem',
              }}
            >
              {'Marca El\u202F\u202FPaso'}
            </Typography>
            <Divider
              sx={(theme) => ({
                borderColor: 'transparent',
                mx: { xs: '1.5em', sm: '2.5em' },
                ...theme.applyStyles('dark', {
                  boxShadow: '0 -2px 5px 1px #12ff00',
                }),
              })}
            />
          </Stack>
          {/* NOTE [RP] 2025-05-13: uncomment when positionAnchor will have wider support */}
          {/* https://caniuse.com/?search=position-anchor */}
          {/* <Stack>
            <Typography
                // @ts-ignore
              variant="mainGreen"
              component="p"
              sx={{
                fontSize: { xs: '4em', sm: '5em' },
                lineHeight: 1,
                marginBottom: '0.7rem',
                px: { xs: '0.5em', md: '1em' },
                textAlign: 'center',
                maxWidth: { xs: '70vw', sm: 'unset' },
              }}
            >
              <Box
                component="span"
                sx={{
                  position: 'relative',
                  anchorName: '--span',
                  pb: '0.7rem',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    zIndex: -1,
                    positionAnchor: '--span',
                    inset: {
                      xs: 'calc(100% - 3px) calc(anchor(end) - 10%) calc(100% - 3px) calc(anchor(start) - 10%)',
                      sm: 'calc(100% - 3px) calc(anchor(end) - 5%) calc(100% - 3px) calc(anchor(start) - 5%)',
                    },
                    boxShadow: '0 -2px 5px 1px #12ff00',
                  },
                }}
              >
                {'Marca El\u202F\u202FPaso'}
              </Box>
            </Typography>
          </Stack> */}
          <Divider sx={(theme) => ({
            borderColor: alpha(theme.palette.grey[theme.palette.mode === 'dark' ? 100 : 900], 0.8),
            mt: '-1px',
          })}
          />
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

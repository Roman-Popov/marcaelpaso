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

const UNDERLIGHT_ANIMATION = {
  '0%': {
    boxShadow: '0 -2px 5px 1px #12ff00',
  },
  '3%': {
    boxShadow: '0 0 0 0 transparent',
  },
  '6%': {
    boxShadow: '0 0 0 0 transparent',
  },
  '7%': {
    boxShadow: '0 -2px 5px 1px #12ff00',
  },
  '8%': {
    boxShadow: '0 0 0 0 transparent',
  },
  '9%': {
    boxShadow: '0 -2px 5px 1px #12ff00',
  },
  '10%': {
    boxShadow: '0 0 0 0 transparent',
  },
  '20%': {
    boxShadow: '0 -2px 5px 1px #12ff00',
  },
  '50%': {
    boxShadow: '0 -2px 5px 1px #12ff00',
  },
  '99%': {
    boxShadow: '0 0 0 0 transparent',
  },
  '100%': {
    boxShadow: '0 -2px 5px 1px #12ff00',
  },
};

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
          {/* NOTE [RP] 2025-05-13: remove when positionAnchor will have wider support */}
          {/* https://caniuse.com/?search=position-anchor */}
          {/* https://kizu.dev/shrinkwrap-problem/ */}
          <Stack
            sx={{
              '@supports (anchor-name: --foo)': {
                display: 'none',
              },
              overflowY: 'hidden',
            }}
          >
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
                  '@keyframes underlight': UNDERLIGHT_ANIMATION,
                  boxShadow: '0 0 0 0 transparent',
                  animation: 'underlight 1s linear forwards',
                  animationDelay: '1s',
                }),
              })}
            />
          </Stack>
          <Stack
            sx={{
              overflowY: 'hidden',
              display: 'none',
              '@supports (anchor-name: --foo)': {
                display: 'flex',
              },
            }}
          >
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
                sx={(theme) => ({
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
                    ...theme.applyStyles('dark', {
                      '@keyframes underlight': UNDERLIGHT_ANIMATION,
                      boxShadow: '0 0 0 0 transparent',
                      animation: 'underlight 1s linear forwards',
                      animationDelay: '1s',
                    }),
                  },
                })}
              >
                {'Marca El\u202F\u202FPaso'}
              </Box>
            </Typography>
          </Stack>
          <Divider sx={(theme) => ({
            borderColor: alpha(theme.palette.grey[theme.palette.mode === 'dark' ? 500 : 900], 0.8),
            mt: '-1px',
          })}
          />
        </Box>
        <Typography
          variant="h2"
          textAlign="center"
          sx={(theme) => ({
            py: { xs: 1, sm: 1.5 },
            fontSize: { xs: '2.25em', sm: '2.75em' },
            ...theme.applyStyles('dark', {
              '@keyframes appearance': {
                '0%': {
                  transform: 'scale(0.8) translateY(-20px)',
                  opacity: 0,
                },
                '100%': {
                  transform: 'scale(1) translateY(0)',
                  opacity: 1,
                },
              },
              opacity: 0,
              animation: 'appearance 1s linear forwards',
              animationDelay: '2s',
            }),
          })}
        >
          {t('header.name')}
        </Typography>
      </Container>
    </Box>
  );
};

export const MemoizedStudioName = React.memo(StudioName);

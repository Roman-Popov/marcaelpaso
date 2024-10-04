import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PaletteMode, ThemeProvider, createTheme } from '@mui/material/styles';
import {
  Box,
  Container,
  CssBaseline,
  Stack,
  Typography,
} from '@mui/material';
import { Header } from 'modules/header';
import { Prices } from 'modules/prices';
import { Schedule } from 'modules/schedule';
import { SpeedDial } from 'modules/speed-dial';
import { Location } from 'modules/location';
import { getTheme } from './theme';
import './App.css';

const App = () => {
  const [colorMode, setColorMode] = useState<PaletteMode>(
    localStorage.getItem('colorMode') as PaletteMode | null
    || 'dark'
  );

  const { t } = useTranslation();

  const theme = createTheme(getTheme(colorMode));

  const toggleColorMode = useCallback(
    () => {
      const newMode = colorMode === 'dark' ? 'light' : 'dark';
      setColorMode(newMode);
      localStorage.setItem('colorMode', newMode);
    },
    [colorMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          zIndex: -1,
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100lvw',
          height: '100lvh',
          ...(theme.palette.mode === 'dark'
            ? {
              backgroundImage: 'linear-gradient(147deg, #0b371e 0%, #000000 74%)',
              transform: 'scaleX(-1)',
            }
            : {
              // eslint-disable-next-line max-len
              backgroundImage: 'radial-gradient(circle farthest-corner at 0.8% 3.1%, rgba(255,188,224,1) 0%, rgba(170,165,255,1) 46%, rgba(165,255,205,1) 100.2% )',
            }
          ),
        }}
      />
      <Header colorMode={colorMode} toggleColorMode={toggleColorMode} />
      <SpeedDial />
      <Stack spacing={10} sx={{ my: 20 }}>
        <Box>
          <Container maxWidth="md">
            <Typography
              id="schedule"
              variant="h2"
              textAlign="center"
              sx={{ mb: 2, scrollMarginTop: { xs: '100px', sm: '120px' } }}
            >
              {t('header.schedule')}
            </Typography>
          </Container>
          <Schedule />
        </Box>
        <Box>
          <Container maxWidth="md">
            <Typography
              id="pricing"
              variant="h2"
              textAlign="center"
              sx={{ mb: 2, scrollMarginTop: { xs: '100px', sm: '120px' } }}
            >
              {t('header.pricing')}
            </Typography>
          </Container>
          <Prices />
        </Box>
        <Box>
          <Container maxWidth="md">
            <Typography
              id="location"
              variant="h2"
              textAlign="center"
              sx={{ mb: 2, scrollMarginTop: { xs: '100px', sm: '120px' } }}
            >
              {t('header.location')}
            </Typography>
          </Container>
          <Location />
        </Box>
      </Stack>
    </ThemeProvider>
  );
};

export default App;

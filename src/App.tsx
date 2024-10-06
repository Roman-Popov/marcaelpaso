import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PaletteMode, ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Stack } from '@mui/material';
import {
  Header,
  Prices,
  About,
  Schedule,
  SpeedDial,
  Location,
} from 'modules';
import { BackgroundImage, SectionWrapper, StudioName } from 'components';
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
      <BackgroundImage />
      <Header colorMode={colorMode} toggleColorMode={toggleColorMode} />
      <Stack spacing={10} sx={{ my: 15 }}>
        <StudioName />
        <SectionWrapper id="about" header={t('header.about')}>
          <About />
        </SectionWrapper>
        <SectionWrapper id="schedule" header={t('header.schedule')}>
          <Schedule />
        </SectionWrapper>
        <SectionWrapper id="pricing" header={t('header.pricing')}>
          <Prices />
        </SectionWrapper>
        <SectionWrapper id="location" header={t('header.location')}>
          <Location />
        </SectionWrapper>
      </Stack>
      <SpeedDial />
    </ThemeProvider>
  );
};

export default App;

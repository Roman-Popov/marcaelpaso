import * as React from 'react';
import { IconButton, Stack } from '@mui/material';
import { PaletteMode } from '@mui/material/styles';
import {
  DarkModeRounded as DarkModeRoundedIcon,
  LightModeRounded as LightModeRoundedIcon,
} from '@mui/icons-material';
import { LanguageSelector } from '../language-selector';

export type SiteSettingsPanelProps = {
  colorMode: PaletteMode,
  reversed?: boolean,
  size?: 'small',
  toggleColorMode: () => void,
};

const SiteSettingsPanel = (props: SiteSettingsPanelProps) => {
  const {
    colorMode,
    reversed = false,
    size,
    toggleColorMode,
  } = props;

  return (
    <Stack direction={reversed ? 'row-reverse' : 'row'} spacing={1}>
      <LanguageSelector size={size} />
      <IconButton
        onClick={toggleColorMode}
        color="primary"
        aria-label="Theme toggle button"
        size={size}
      >
        {colorMode === 'dark' ? (
          <LightModeRoundedIcon fontSize={size} />
        ) : (
          <DarkModeRoundedIcon fontSize={size} />
        )}
      </IconButton>
    </Stack>
  );
};

export const MemoizedSiteSettingsPanel = React.memo(SiteSettingsPanel);

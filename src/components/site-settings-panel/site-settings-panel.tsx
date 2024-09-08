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
  toggleColorMode: () => void,
};

const SiteSettingsPanel = (props: SiteSettingsPanelProps) => {
  const { colorMode, toggleColorMode } = props;

  return (
    <Stack direction="row" spacing={1}>
      <LanguageSelector />
      <IconButton
        onClick={toggleColorMode}
        color="primary"
        aria-label="Theme toggle button"
        size="small"
      >
        {colorMode === 'dark' ? (
          <LightModeRoundedIcon fontSize="small" />
        ) : (
          <DarkModeRoundedIcon fontSize="small" />
        )}
      </IconButton>
    </Stack>
  );
};

export const MemoizedSiteSettingsPanel = React.memo(SiteSettingsPanel);

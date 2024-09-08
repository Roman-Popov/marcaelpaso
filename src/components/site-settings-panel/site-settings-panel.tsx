import * as React from 'react';
import { IconButton } from '@mui/material';
import { PaletteMode } from '@mui/material/styles';
import {
  DarkModeRounded as DarkModeRoundedIcon,
  LightModeRounded as LightModeRoundedIcon,
} from '@mui/icons-material';

export type SiteSettingsPanelProps = {
  colorMode: PaletteMode,
  toggleColorMode: () => void,
};

const SiteSettingsPanel = (props: SiteSettingsPanelProps) => {
  const { colorMode, toggleColorMode } = props;

  return (
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
  );
};

export const MemoizedSiteSettingsPanel = React.memo(SiteSettingsPanel);

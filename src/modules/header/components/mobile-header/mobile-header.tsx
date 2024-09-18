/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useCallback } from 'react';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  MenuItem,
} from '@mui/material';
import { PaletteMode } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useTranslation } from 'react-i18next';
import { NotUnderlinedLink } from 'components/not-underlined-link';
import { SiteSettingsPanel } from '../site-settings-panel';

type MobileHeaderProps = {
  colorMode: PaletteMode,
  toggleColorMode: () => void,
};

const MobileHeader = (props: MobileHeaderProps) => {
  const { colorMode, toggleColorMode } = props;

  const [open, setOpen] = useState(false);

  const { t } = useTranslation();

  const openDrawer = useCallback(() => { setOpen(true); }, []);
  const closeDrawer = useCallback(() => { setOpen(false); }, []);

  const menuItemCommonProps = {
    component: NotUnderlinedLink,
    onClick: closeDrawer,
    sx: { width: 'auto', fontWeight: 500, px: { xs: 2.25, sm: 2.25 } },
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton aria-label="Menu button" onClick={openDrawer}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="top" open={open} onClose={closeDrawer}>
        <Box sx={{
          px: { xs: 2, sm: 3 },
          pt: { xs: 4, sm: 5 },
          pb: 3,
          backgroundColor: 'background.default',
        }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: { xs: 1, sm: 2 },
            }}
          >
            <SiteSettingsPanel reversed {...{ colorMode, toggleColorMode }} />
            <IconButton onClick={closeDrawer}>
              <CloseRoundedIcon />
            </IconButton>
          </Box>
          <Divider sx={{ my: 3 }} />
          <Box>
            <MenuItem href="#about" {...menuItemCommonProps}>
              {t('header.about')}
            </MenuItem>
            <MenuItem href="#schedule" {...menuItemCommonProps}>
              {t('header.schedule')}
            </MenuItem>
            <MenuItem href="#pricing" {...menuItemCommonProps}>
              {t('header.pricing')}
            </MenuItem>
            <MenuItem href="#location" {...menuItemCommonProps}>
              {t('header.location')}
            </MenuItem>
            <MenuItem href="#gallery" {...menuItemCommonProps}>
              {t('header.gallery')}
            </MenuItem>
            <MenuItem href="#contacts" {...menuItemCommonProps}>
              {t('header.contacts')}
            </MenuItem>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export const MemoizedMobileHeader = React.memo(MobileHeader);

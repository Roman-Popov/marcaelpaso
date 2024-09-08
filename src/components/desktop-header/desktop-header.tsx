import React, { forwardRef } from 'react';
import { Box, Button } from '@mui/material';
import { SiteSettingsPanel, type SiteSettingsPanelProps } from '../site-settings-panel';
import { NotUnderlinedLink } from '../not-underlined-link';

interface DesktopHeaderProps extends SiteSettingsPanelProps {}

const LinkButton = forwardRef(({ children, ...restProps }: { children: React.ReactNode }, ref: any) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Button {...restProps} ref={ref} variant="text" color="info" size="small">
    {children}
  </Button>
));

const DesktopHeader = (props: DesktopHeaderProps) => {
  const { colorMode, toggleColorMode } = props;

  return (
    <Box sx={{
      display: 'flex',
      flex: 1,
      justifyContent: 'space-between',
      ml: 2,
    }}
    >
      <Box>
        <NotUnderlinedLink href="#about" component={LinkButton}>
          About
        </NotUnderlinedLink>
        <NotUnderlinedLink href="#schedule" component={LinkButton}>
          Schedule
        </NotUnderlinedLink>
        <NotUnderlinedLink href="#pricing" component={LinkButton}>
          Pricing
        </NotUnderlinedLink>
        <NotUnderlinedLink href="#location" component={LinkButton}>
          Location
        </NotUnderlinedLink>
        <NotUnderlinedLink href="#gallery" component={LinkButton}>
          Gallery
        </NotUnderlinedLink>
        <NotUnderlinedLink href="#contacts" component={LinkButton}>
          Contacts
        </NotUnderlinedLink>
      </Box>
      <SiteSettingsPanel {...{ colorMode, toggleColorMode }} />
    </Box>
  );
};

export const MemoizedDesktopHeader = React.memo(DesktopHeader);

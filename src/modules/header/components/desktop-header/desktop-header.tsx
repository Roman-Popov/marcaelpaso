import React, { forwardRef } from 'react';
import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { NotUnderlinedLink } from 'components/not-underlined-link';
import { SiteSettingsPanel, type SiteSettingsPanelProps } from '../site-settings-panel';

interface DesktopHeaderProps extends SiteSettingsPanelProps {}

const LinkButton = forwardRef(({ children, ...restProps }: { children: React.ReactNode }, ref: any) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Button {...restProps} ref={ref} variant="text" color="info" size="small">
    {children}
  </Button>
));

const DesktopHeader = (props: DesktopHeaderProps) => {
  const { colorMode, toggleColorMode } = props;

  const { t } = useTranslation();

  return (
    <Box sx={{
      display: 'flex',
      flex: 1,
      justifyContent: 'space-between',
      ml: 1.5,
    }}
    >
      <Box>
        <NotUnderlinedLink href="#about" component={LinkButton}>
          {t('header.about')}
        </NotUnderlinedLink>
        <NotUnderlinedLink href="#schedule" component={LinkButton}>
          {t('header.schedule')}
        </NotUnderlinedLink>
        <NotUnderlinedLink href="#pricing" component={LinkButton}>
          {t('header.pricing')}
        </NotUnderlinedLink>
        <NotUnderlinedLink href="#location" component={LinkButton}>
          {t('header.location')}
        </NotUnderlinedLink>
        <NotUnderlinedLink href="#gallery" component={LinkButton}>
          {t('header.gallery')}
        </NotUnderlinedLink>
        <NotUnderlinedLink href="#contacts" component={LinkButton}>
          {t('header.contacts')}
        </NotUnderlinedLink>
      </Box>
      <SiteSettingsPanel {...{ colorMode, toggleColorMode }} />
    </Box>
  );
};

export const MemoizedDesktopHeader = React.memo(DesktopHeader);

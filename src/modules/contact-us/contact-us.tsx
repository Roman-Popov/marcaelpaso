import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Divider,
  Menu,
  MenuItem,
  Typography,
  type Theme,
} from '@mui/material';
import {
  Telegram as TelegramIcon,
  WhatsApp as WhatsAppIcon,
  PhoneRounded as PhoneIcon,
} from '@mui/icons-material';
import { NotUnderlinedLink } from 'components/not-underlined-link';
import { TELEGRAM_ID, PHONE_NUMBER } from '../../constants';

const actions = [
  { icon: <PhoneIcon />, code: 'phone', href: `tel:${PHONE_NUMBER}` },
  { icon: <TelegramIcon />, code: 'telegram', href: `https://t.me/${TELEGRAM_ID}` },
  { icon: <WhatsAppIcon />, code: 'whatsApp', href: `https://wa.me/${PHONE_NUMBER}` },
];

const ContactUs = (props: { menuPosition: null | { x: number, y: number }, handleClose: () => void }) => {
  const { menuPosition, handleClose } = props;
  const isOpen = menuPosition !== null;

  const { t } = useTranslation();

  useEffect(() => {
    // NOTE [RP] 2025-09-03: Костыль, для того, чтобы обойти поведение запрета на скролл при открытом меню в MUI
    if (isOpen) {
      window.addEventListener('mousewheel', handleClose);
      window.addEventListener('touchmove', handleClose);

      return () => {
        window.removeEventListener('mousewheel', handleClose);
        window.removeEventListener('touchmove', handleClose);
      };
    }

    return undefined;
  }, [handleClose, isOpen]);

  return (
    <Menu
      slotProps={{
        paper: {
          sx: (theme: Theme) => ({ borderColor: theme.palette.success.main }),
        },
      }}
      autoFocus={false}
      open={isOpen}
      onClose={handleClose}
      anchorReference="anchorPosition"
      anchorPosition={
        isOpen
          ? { top: menuPosition.y, left: menuPosition.x }
          : undefined
      }
    >
      <Typography fontWeight="bold" textAlign="center">{t('socials.contactUs')}</Typography>
      <Divider sx={{ mt: 1, mb: 0.5 }} />
      {actions.map(({ code, href, icon }) => (
        <MenuItem
          key={code}
          onClick={handleClose}
          href={href}
          component={NotUnderlinedLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ width: '100%' }}
          tabIndex={-1}
        >
          <Box sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',
          }}
          >
            <Typography mr={1.5}>{t(`socials.${code}`)}</Typography>
            {icon}
          </Box>
        </MenuItem>
      ))}
    </Menu>
  );
};

export const MemoizedContactUs = React.memo(ContactUs);

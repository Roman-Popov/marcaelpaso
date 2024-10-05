import React, { useState } from 'react';
import {
  Box,
  Backdrop,
  SpeedDial as MUISpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Slide,
} from '@mui/material';
import {
  ForumRounded as ContactsIcon,
  MailRounded as MailIcon,
  Telegram as TelegramIcon,
  WhatsApp as WhatsAppIcon,
  PhoneRounded as PhoneIcon,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { TELEGRAM_ID, DOMAIN, PHONE_NUMBER } from '../../constants';
import { SpeedDialContent } from './components/speed-dial-content';

const actions = [
  { icon: <TelegramIcon />, code: 'telegram', href: `https://t.me/${TELEGRAM_ID}` },
  { icon: <WhatsAppIcon />, code: 'whatsApp', href: `https://wa.me/${PHONE_NUMBER}` },
  { icon: <PhoneIcon />, code: 'phone', href: `tel:${PHONE_NUMBER}` },
  { icon: <MailIcon />, code: 'email', href: `mailto:studio@${DOMAIN}` },
];

const SpeedDial = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { t } = useTranslation();

  return (
    <Box>
      <Backdrop open={open} sx={{ zIndex: 1000 }} />
      <Slide in direction="up" timeout={{ enter: 1000 }}>
        <MUISpeedDial
          ariaLabel="contacts"
          onClose={handleClose}
          onOpen={handleOpen}
          sx={{
            alignItems: 'end',
            position: 'fixed',
            bottom: 24,
            right: { xs: 18, sm: 24 },
          }}
          FabProps={{ variant: 'extended' }}
          icon={(
            <SpeedDialContent
              icon={<ContactsIcon />}
              text={t('socials.contactUs')}
              bold
            />
        )}
          transitionDuration={{ enter: 1000 }}
        >
          {actions.map(({ code, href, icon }) => (
            <SpeedDialAction
              key={code}
              FabProps={{
                variant: 'extended',
                sx: {
                  px: 2,
                  width: 'fit-content',
                  alignSelf: 'end',
                  textTransform: 'none',
                },
              }}
              icon={(
                <SpeedDialIcon
                  icon={(
                    <SpeedDialContent
                      href={href}
                      icon={icon}
                      text={t(`socials.${code}`)}
                    />
                  )}
                />
              )}
            />
          ))}
        </MUISpeedDial>
      </Slide>
    </Box>
  );
};

export const MemoizedSpeedDial = React.memo(SpeedDial);

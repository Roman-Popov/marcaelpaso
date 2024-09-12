import * as React from 'react';
import { SpeedDial as MUISpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import {
  CloseRounded as CloseIcon,
  ForumRounded as ContactsIcon,
  MailRounded as MailIcon,
  Telegram as TelegramIcon,
  WhatsApp as WhatsAppIcon,
  PhoneRounded as PhoneIcon,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { TELEGRAM_ID, DOMAIN, PHONE_NUMBER } from '../../constants';
import { NotUnderlinedLink } from '../not-underlined-link';

const actions = [
  { icon: <TelegramIcon />, code: 'telegram', href: `https://t.me/${TELEGRAM_ID}` },
  { icon: <WhatsAppIcon />, code: 'whatsApp', href: `https://wa.me/${PHONE_NUMBER}` },
  { icon: <PhoneIcon />, code: 'phone', href: `tel:${PHONE_NUMBER}` },
  { icon: <MailIcon />, code: 'email', href: `mailto:studio@${DOMAIN}` },
];

const SpeedDial = () => {
  const { t } = useTranslation();
  return (
    <MUISpeedDial
      ariaLabel="contacts"
      sx={{ position: 'absolute', bottom: 24, right: 24 }}
      icon={(
        <SpeedDialIcon
          icon={<ContactsIcon />}
          openIcon={<CloseIcon />}
        />
      )}
    >
      {actions.map(({ code, href, icon }) => (
        <SpeedDialAction
          key={code}
          tooltipTitle={t(`socials.${code}`)}
          icon={(
            <SpeedDialIcon
              icon={(
                <NotUnderlinedLink href={href} target="_blank" rel="noopener noreferrer">
                  {icon}
                </NotUnderlinedLink>
              )}
            />
          )}
        />
      ))}
    </MUISpeedDial>
  );
};

export const MemoizedSpeedDial = React.memo(SpeedDial);

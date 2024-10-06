import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {
  MailRounded as MailIcon,
  Telegram as TelegramIcon,
} from '@mui/icons-material';
import { IconFOrangeHeart } from 'react-fluentui-emoji/lib/flat';
import { DEV_EMAIL, DEV_TELEGRAM_ID, DOMAIN } from '../../constants';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Container maxWidth="md">
      <Typography
        sx={(theme) => ({
          width: '100%',
          textAlign: 'center',
          py: 0.75,
          fontSize: '0.8em',
          color: theme.palette.grey[400],
          ...theme.applyStyles('dark', {
            color: theme.palette.grey[600],
          }),
        })}
      >
        {t('footer.notAnOffer')}
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 2.5, sm: 0 }}
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid',
          borderColor: 'divider',
          py: 2,
        }}
      >
        <Stack
          direction={{ xs: 'column-reverse', sm: 'row' }}
          spacing={1}
          sx={{ width: '100%', alignItems: 'center' }}
        >
          <Stack
            direction="row"
            spacing={1}
            sx={{ justifyContent: 'center', width: { xs: '100%', sm: 'auto' } }}
          >
            <IconButton
              size="small"
              href={`https://t.me/${DEV_TELEGRAM_ID}`}
              aria-label="Developer's telegram"
            >
              <TelegramIcon />
            </IconButton>
            <IconButton
              size="small"
              href={`mailto:${DEV_EMAIL}`}
              aria-label="Developer's email"
            >
              <MailIcon />
            </IconButton>
          </Stack>
          <Typography
            color="text.secondary"
            textAlign={{ xs: 'center', sm: 'left' }}
            sx={{ width: '100%' }}
          >
            {t('footer.madeWithLove')}
            <IconFOrangeHeart size="1.2em" style={{ verticalAlign: 'sub', margin: '0 0.3em' }} />
            {t('footer.devName')}
          </Typography>
        </Stack>

        <Typography
          color="text.secondary"
          sx={{
            width: '100%',
            textAlign: { xs: 'center', sm: 'end' },
            whiteSpace: 'nowrap',
            pl: '2em',
          }}
        >
          {'© '}
          <Link color="text.secondary" href={DOMAIN}>
            {`Marca El Paso, ${t('header.name')}`}
          </Link>
          &nbsp;
          {`2022 — ${new Date().getFullYear()}`}
        </Typography>
      </Stack>
    </Container>
  );
};

export const MemoizedFooter = React.memo(Footer);

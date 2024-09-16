import * as React from 'react';
import {
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FlagIcon } from '../flag-icon';

const LanguageSelector = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const { t, i18n } = useTranslation();
  const selectedLanguage = i18n.language.split('-')[0] as LanguageType;
  const languages = [
    { short: 'ru', long: t('languages.russian') },
    { short: 'es', long: t('languages.spanish') },
    { short: 'en', long: t('languages.english') },
  ] as { short: LanguageType, long: string }[];

  const isMenuOpen = Boolean(anchorEl);
  const onMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const onMenuClose = () => setAnchorEl(null);

  const onLangClick = (lang: LanguageType) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
    onMenuClose();
  };

  return (
    <>
      <IconButton
        onClick={onMenuOpen}
        color="primary"
        aria-label="Change language button"
        size="small"
      >
        <FlagIcon flag={selectedLanguage} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={onMenuClose}
      >
        {languages.map(({ short, long }) => (
          <MenuItem onClick={() => onLangClick(short)} key={short} selected={short === selectedLanguage}>
            <Stack direction="row" spacing={0.5} sx={{ alignItems: 'baseline' }}>
              <FlagIcon flag={short} sx={{ height: 'auto' }} />
              <Typography>{long}</Typography>
            </Stack>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export const MemoizedLanguageSelector = React.memo(LanguageSelector);

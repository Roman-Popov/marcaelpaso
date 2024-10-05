import * as React from 'react';
import { useTranslation } from 'react-i18next';
import {
  alpha,
  Box,
  Card,
  Stack,
  Typography,
} from '@mui/material';
import { IconFManDancingMedium, IconFWomanDancingLight } from 'react-fluentui-emoji/lib/flat';

const AboutText = () => {
  const { t } = useTranslation();
  return (
    <Card
      variant="outlined"
      sx={[
        (theme) => ({
          textAlign: 'justify',
          width: '100%',
          backdropFilter: 'blur(4px)',
          backgroundColor: alpha(theme.palette.grey[50], 0.85),
          ...theme.applyStyles('dark', {
            backgroundColor: alpha(theme.palette.grey[900], 0.85),
          }),
        }),
      ]}
    >
      <Stack spacing={2} sx={{ textIndent: '1.5em' }}>
        <Typography fontSize="1.1em">
          {t('about.p1st')}
        </Typography>
        <Typography fontSize="1.1em">
          {t('about.p2nd')}
        </Typography>
        <Typography fontSize="1.1em">
          {t('about.p3rd')}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: '2em', sm: '0.5em' },
            textAlign: 'center',
          }}
        >
          <Box sx={{ display: 'flex', fontSize: { xs: '3em', sm: '2em' } }}>
            <IconFManDancingMedium size="1em" />
          </Box>
          <Typography
            sx={{
              fontSize: '1.5em',
              fontWeight: 'bold',
              textIndent: 0,
              width: { xs: 'min-content', sm: 'auto' },
            }}
          >
            {t('about.p4th')}
          </Typography>
          <Box sx={{ display: 'flex', fontSize: { xs: '3em', sm: '2em' } }}>
            <IconFWomanDancingLight size="1em" />
          </Box>
        </Box>
      </Stack>
    </Card>
  );
};

export const MemoizedAboutText = React.memo(AboutText);

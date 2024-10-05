import * as React from 'react';
import { useTranslation } from 'react-i18next';
import {
  alpha,
  Card,
  Stack,
  Typography,
} from '@mui/material';

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
        <Typography sx={{
          fontSize: '1.5em',
          fontWeight: 'bold',
          textIndent: 0,
          textAlign: 'center',
        }}
        >
          {t('about.p4th')}
        </Typography>
      </Stack>
    </Card>
  );
};

export const MemoizedAboutText = React.memo(AboutText);

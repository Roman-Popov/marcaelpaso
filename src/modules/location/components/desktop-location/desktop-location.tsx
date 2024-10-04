import React, { useRef } from 'react';
import { Card, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Map } from '../map';

const DesktopLocation = () => {
  const containerRef = useRef<null | HTMLDivElement>(null);

  const { t } = useTranslation();

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ height: '40em' }}
    >
      <Card variant="outlined" sx={{ width: '100%' }}>
        <Stack sx={{ height: '100%' }}>
          <Typography fontSize="1.15em" fontWeight="bold" sx={{ mb: 1.5 }}>{t('location.address')}</Typography>
          <Typography fontSize="0.8em">{t('location.addressGlobal')}</Typography>
          <Typography sx={{ mb: 1.5 }}>{t('location.addressLocal')}</Typography>
          <Typography>{t('location.details1st')}</Typography>
          <Typography>{t('location.details2nd')}</Typography>
          <Typography sx={{ mb: 5 }}>{t('location.videoDetails')}</Typography>
          <Card variant="outlined" sx={{ p: 0, flexGrow: 1 }} ref={containerRef}>
            <Map containerRef={containerRef} />
          </Card>
        </Stack>
      </Card>
      <Card variant="outlined" sx={{ p: 0, height: '100%', flexShrink: 0 }}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          loop
          controls
          preload="none"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          poster="path.webp"
        >
          <source src="welcome.mp4" type="video/mp4" />
        </video>
      </Card>
    </Stack>
  );
};

export const MemoizedDesktopLocation = React.memo(DesktopLocation);

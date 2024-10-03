import React, { useRef } from 'react';
import { Card, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Map } from '../map';

const TabletLocation = () => {
  const containerRef = useRef<null | HTMLDivElement>(null);

  const { t } = useTranslation();

  return (
    <Stack spacing={{ xs: 1, sm: 2 }}>
      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2 }}
      >
        <Card variant="outlined" sx={{ width: '50%' }}>
          <Stack>
            <Typography fontSize="1.15em" fontWeight="bold" sx={{ mb: 1.5 }}>{t('location.address')}</Typography>
            <Typography fontSize="0.8em">{t('location.addressGlobal')}</Typography>
            <Typography sx={{ mb: 1.5 }}>{t('location.addressLocal')}</Typography>
            <Typography>{t('location.details1st')}</Typography>
            <Typography>{t('location.details2nd')}</Typography>
            <Typography sx={{ mb: 5 }}>{t('location.videoDetails')}</Typography>
          </Stack>
        </Card>
        <Card variant="outlined" sx={{ p: 0, width: '50%' }}>
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            loop
            controls
            preload="none"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            poster="path.png"
          >
            <source src="welcome.mp4" type="video/mp4" />
          </video>
        </Card>
      </Stack>
      <Card variant="outlined" sx={{ p: 0, height: '25em', width: '100%' }} ref={containerRef}>
        <Map containerRef={containerRef} />
      </Card>
    </Stack>
  );
};

export const MemoizedTabletLocation = React.memo(TabletLocation);

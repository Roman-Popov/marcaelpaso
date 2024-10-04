import React, { useRef } from 'react';
import { Card, Stack } from '@mui/material';
import { AddressText } from '../address-text';
import { LocationVideo } from '../location-video';
import { Map } from '../map';

const MobileLocation = () => {
  const containerRef = useRef<null | HTMLDivElement>(null);

  return (
    <Stack spacing={{ xs: 1, sm: 2 }}>
      <Card variant="outlined" sx={{ width: '100%' }}>
        <Stack>
          <AddressText />
        </Stack>
      </Card>
      <Card variant="outlined" sx={{ p: 0, width: '100%', display: 'flex' }}>
        <LocationVideo />
      </Card>
      <Card variant="outlined" sx={{ p: 0, height: '30em', width: '100%' }} ref={containerRef}>
        <Map containerRef={containerRef} />
      </Card>
    </Stack>
  );
};

export const MemoizedMobileLocation = React.memo(MobileLocation);

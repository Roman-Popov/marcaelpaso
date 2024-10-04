import React, { useRef } from 'react';
import { Card, Stack } from '@mui/material';
import { AddressText } from '../address-text';
import { LocationVideo } from '../location-video';
import { Map } from '../map';

const TabletLocation = () => {
  const containerRef = useRef<null | HTMLDivElement>(null);

  return (
    <Stack spacing={{ xs: 1, sm: 2 }}>
      <Stack
        direction="row"
        spacing={{ xs: 1, sm: 2 }}
      >
        <Card variant="outlined" sx={{ width: '50%' }}>
          <Stack>
            <AddressText />
          </Stack>
        </Card>
        <Card variant="outlined" sx={{ p: 0, width: '50%' }}>
          <LocationVideo />
        </Card>
      </Stack>
      <Card variant="outlined" sx={{ p: 0, height: '25em', width: '100%' }} ref={containerRef}>
        <Map containerRef={containerRef} />
      </Card>
    </Stack>
  );
};

export const MemoizedTabletLocation = React.memo(TabletLocation);

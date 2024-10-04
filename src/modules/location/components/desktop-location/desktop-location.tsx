import React, { useRef } from 'react';
import { Card, Stack } from '@mui/material';
import { AddressText } from '../address-text';
import { LocationVideo } from '../location-video';
import { Map } from '../map';

const DesktopLocation = () => {
  const containerRef = useRef<null | HTMLDivElement>(null);

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ height: '40em' }}
    >
      <Card variant="outlined" sx={{ width: '100%' }}>
        <Stack sx={{ height: '100%' }}>
          <AddressText />
          <Card variant="outlined" sx={{ p: 0, flexGrow: 1 }} ref={containerRef}>
            <Map containerRef={containerRef} />
          </Card>
        </Stack>
      </Card>
      <Card variant="outlined" sx={{ p: 0, height: '100%', flexShrink: 0 }}>
        <LocationVideo />
      </Card>
    </Stack>
  );
};

export const MemoizedDesktopLocation = React.memo(DesktopLocation);

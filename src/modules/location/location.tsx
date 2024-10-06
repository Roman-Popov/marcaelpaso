import * as React from 'react';
import { Card } from '@mui/material';
import { Desktop, Tablet, Mobile } from 'components/responsive-wrappers';
import { DesktopLocation } from './components/desktop-location';
import { TabletLocation } from './components/tablet-location';
import { MobileLocation } from './components/mobile-location';

const Location = () => (
  <Card sx={{ p: { xs: 1, sm: 2 } }}>
    <Desktop>
      <DesktopLocation />
    </Desktop>

    <Tablet>
      <TabletLocation />
    </Tablet>

    <Mobile>
      <MobileLocation />
    </Mobile>
  </Card>
);

export const MemoizedLocation = React.memo(Location);

import * as React from 'react';
import { Card, Container } from '@mui/material';
import { Desktop, Tablet, Mobile } from 'components/responsive-wrappers';
import { DesktopLocation } from './components/desktop-location';
import { TabletLocation } from './components/tablet-location';
import { MobileLocation } from './components/mobile-location';

const Location = () => (
  <Container maxWidth="md">
    <Card sx={{ p: { sm: 2, xs: 1 } }}>
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
  </Container>
);

export const MemoizedLocation = React.memo(Location);

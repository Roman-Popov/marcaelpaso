import * as React from 'react';
import { Card, Stack, useTheme } from '@mui/material';
import { Desktop, TabletAndBelow } from 'components/responsive-wrappers';
import { DesktopAbout } from './components/desktop-about';
import { MobileAbout } from './components/mobile-about';

const About = () => {
  const theme = useTheme();

  return (
    <Card sx={{
      p: { sm: 2, xs: 1 },
      backgroundImage: `url(${process.env.PUBLIC_URL}gallery/splashes-${theme.palette.mode}.webp)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      border: 'none',
    }}
    >
      <Stack spacing={2}>
        <Desktop>
          <DesktopAbout />
        </Desktop>
        <TabletAndBelow>
          <MobileAbout />
        </TabletAndBelow>
        <img
          src={`${process.env.PUBLIC_URL}gallery/students.webp`}
          alt="Students"
          style={{ width: '100%' }}
        />
      </Stack>
    </Card>
  );
};

export const MemoizedAbout = React.memo(About);

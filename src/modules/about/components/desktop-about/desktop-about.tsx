import * as React from 'react';
import { Box, Stack } from '@mui/material';
import { AboutText } from '../about-text';

const DesktopAbout = () => (
  <Stack direction="row" spacing={2}>
    <AboutText />
    <Box sx={{ display: 'flex', alignItems: 'center', width: { xs: '65%', md: '40%' } }}>
      <img
        src={`${process.env.PUBLIC_URL}gallery/intro.webp`}
        alt="Daviel and Katya"
        style={{ width: '100%' }}
      />
    </Box>
  </Stack>
);

export const MemoizedDesktopAbout = React.memo(DesktopAbout);

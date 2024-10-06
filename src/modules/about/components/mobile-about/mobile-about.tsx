import * as React from 'react';
import { Box } from '@mui/material';
import { AboutText } from '../about-text';

const MobileAbout = () => (
  <>
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ width: { xs: '75%', sm: '50%' } }}>
        <img
          src={`${process.env.PUBLIC_URL}gallery/intro.webp`}
          alt="Daviel and Katya"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </Box>
    </Box>
    <AboutText />
  </>
);

export const MemoizedMobileAbout = React.memo(MobileAbout);

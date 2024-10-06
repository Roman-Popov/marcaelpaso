import * as React from 'react';
import { Box } from '@mui/material';

const BackgroundImage = () => (
  <Box
    sx={(theme) => ({
      zIndex: -1,
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100lvw',
      height: '100lvh',
      ...(theme.palette.mode === 'dark'
        ? {
          backgroundImage: 'linear-gradient(147deg, #0b371e 0%, #000000 74%)',
          transform: 'scaleX(-1)',
        }
        : {
          // eslint-disable-next-line max-len
          backgroundImage: 'radial-gradient(circle farthest-corner at 0.8% 3.1%, rgba(255,188,224,1) 0%, rgba(170,165,255,1) 46%, rgba(165,255,205,1) 100.2% )',
        }
      ),
    })}
  />
);

export const MemoizedBackgroundImage = React.memo(BackgroundImage);

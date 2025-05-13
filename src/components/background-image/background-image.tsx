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
      backgroundImage: `
        linear-gradient(135deg, #051827, #09190f),
        url(${process.env.PUBLIC_URL}gallery/bg-left.png),
        url(${process.env.PUBLIC_URL}gallery/bg-right.png)
      `,
      backgroundBlendMode: 'lighten',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100%, auto 60vh, auto 40vh',
      backgroundPositionX: 'left,left, right',
      backgroundPositionY: '100%, 100%, 0',
      ...theme.applyStyles('light', {
        filter: 'invert(1) hue-rotate(270deg)',
      }),
    })}
  />
);

export const MemoizedBackgroundImage = React.memo(BackgroundImage);

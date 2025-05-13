import React from 'react';
import { Typography, type TypographyOwnProps } from '@mui/material';

const Caption = ({ children, sx }: { children: React.ReactNode, sx?: TypographyOwnProps['sx'] }) => (
  <Typography
    sx={{
      fontFamily: 'Geologica, sans-serif',
      fontSize: '1.05rem',
      fontWeight: 'bold',
      textAlign: 'center',
      ...sx,
    }}
  >
    {children}
  </Typography>
);

export const MemoizedCaption = React.memo(Caption);

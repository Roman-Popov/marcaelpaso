import * as React from 'react';
import { Link, type LinkProps } from '@mui/material';

const NotUnderlinedLink = React.forwardRef((props: LinkProps, ref: any) => {
  const { children, sx, ...restProps } = props;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link {...restProps} ref={ref} underline="none" sx={{ ...sx, '&::before': { content: 'none' } }}>
      {children}
    </Link>
  );
});

export const MemoizedNoUnderlinedLink = React.memo(NotUnderlinedLink);

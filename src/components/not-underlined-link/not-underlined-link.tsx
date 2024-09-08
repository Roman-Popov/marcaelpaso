import * as React from 'react';
import { Link, type LinkProps } from '@mui/material';

const NotUnderlinedLink = (props: LinkProps) => {
  const { children, ...restProps } = props;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link {...restProps} underline="none" sx={{ '&::before': { content: 'none' } }}>
      {children}
    </Link>
  );
};

export const MemoizedNoUnderlinedLink = React.memo(NotUnderlinedLink);

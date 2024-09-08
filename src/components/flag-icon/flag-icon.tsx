import * as React from 'react';
import { Icon, SxProps } from '@mui/material';

type FlagIconProps = {
  flag: 'ru' | 'es' | 'en',
  sx?: SxProps,
};

const FlagIcon = (props: FlagIconProps) => {
  const { flag, sx } = props;

  return (
    <Icon sx={sx}>
      <img
        src={`${process.env.PUBLIC_URL}/icons/${flag}.svg`}
        alt={flag}
        style={{ width: '100%', border: '1px solid #c2c9d6' }}
      />
    </Icon>
  );
};

export const MemoizedFlagIcon = React.memo(FlagIcon);

import * as React from 'react';
import {
  SpeedDialIcon,
  Stack,
  SxProps,
  Typography,
} from '@mui/material';
import { NotUnderlinedLink } from 'components/not-underlined-link';

type SpeedDialContentProps = {
  bold?: boolean,
  href?: string,
  icon: React.ReactNode,
  sx?: SxProps,
  text?: string,
};

const SpeedDialContent = (props: SpeedDialContentProps) => {
  const {
    bold = false,
    href,
    icon,
    sx,
    text,
  } = props;

  const Wrapper = href ? NotUnderlinedLink : React.Fragment;

  return (
    <SpeedDialIcon
      sx={sx}
      icon={(
        <Wrapper
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...(href
            ? { href, target: '_blank', rel: 'noopener noreferrer' }
            : {}
          )}
        >
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', transform: 'none !important' }}>
            <Typography fontWeight={bold ? 'bold' : undefined}>
              {text}
            </Typography>
            {icon}
          </Stack>
        </Wrapper>
      )}
    />
  );
};

export const MemoizedSpeedDialContent = React.memo(SpeedDialContent);

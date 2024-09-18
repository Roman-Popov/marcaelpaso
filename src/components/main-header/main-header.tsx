import * as React from 'react';
import {
  AppBar,
  Avatar,
  Container,
  Toolbar,
} from '@mui/material';
import { PaletteMode, styled, alpha } from '@mui/material/styles';
import { TabletAndBelow, Desktop } from '../responsive-wrappers';
import { MobileHeader } from '../mobile-header';
import { NotUnderlinedLink } from '../not-underlined-link';
import { DesktopHeader } from '../desktop-header';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
}));

type MainHeaderProps = {
  colorMode: PaletteMode,
  toggleColorMode: () => void,
};

const MainHeader = (props: MainHeaderProps) => {
  const { colorMode, toggleColorMode } = props;

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundImage: 'none',
        bgcolor: 'transparent',
        boxShadow: 0,
        mt: 3,
      }}
    >
      <Container maxWidth="md">
        <StyledToolbar variant="dense" disableGutters sx={{ p: { sm: 2, xs: 1 } }}>
          <NotUnderlinedLink href="/">
            <Avatar alt="Marca el Paso" src={`${process.env.PUBLIC_URL}logo512.png`} />
          </NotUnderlinedLink>
          <Desktop>
            <DesktopHeader colorMode={colorMode} toggleColorMode={toggleColorMode} />
          </Desktop>
          <TabletAndBelow>
            <MobileHeader colorMode={colorMode} toggleColorMode={toggleColorMode} />
          </TabletAndBelow>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export const MemoizedMainHeader = React.memo(MainHeader);

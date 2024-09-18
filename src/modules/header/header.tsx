import * as React from 'react';
import {
  AppBar,
  Avatar,
  Container,
  Toolbar,
} from '@mui/material';
import { PaletteMode, styled, alpha } from '@mui/material/styles';
import { NotUnderlinedLink } from 'components/not-underlined-link';
import { TabletAndBelow, Desktop } from 'components/responsive-wrappers';
import { MobileHeader } from './components/mobile-header';
import { DesktopHeader } from './components/desktop-header';

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

type HeaderProps = {
  colorMode: PaletteMode,
  toggleColorMode: () => void,
};

const Header = (props: HeaderProps) => {
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

export const MemoizedHeader = React.memo(Header);

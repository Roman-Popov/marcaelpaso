import { useMediaQuery } from '@mui/material';

const useDesktopMediaQuery = () => useMediaQuery('(min-width: 796px)');

const useTabletMediaQuery = () => useMediaQuery('(max-width: 795px) and (min-width: 461px)');

const useMobileMediaQuery = () => useMediaQuery('(max-width: 460px)');

const useTabletAndBelowMediaQuery = () => useMediaQuery('(max-width: 795px)');

export const TabletAndBelow = ({ children }: { children: React.ReactNode }) => {
  const isTabletAndBelow = useTabletAndBelowMediaQuery();

  return isTabletAndBelow ? children : null;
};

export const Desktop = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useDesktopMediaQuery();

  return isDesktop ? children : null;
};

export const Tablet = ({ children }: { children: React.ReactNode }) => {
  const isTablet = useTabletMediaQuery();

  return isTablet ? children : null;
};

export const Mobile = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMobileMediaQuery();

  return isMobile ? children : null;
};

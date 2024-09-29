import { useMediaQuery } from '@mui/material';

const useDesktopMediaQuery = () => useMediaQuery('(min-width: 796px)');

const useTabletAndBelowMediaQuery = () => useMediaQuery('(max-width: 795px)');

export const Desktop = ({ children }: { children: React.ReactNode }) => {
  const isDesktop = useDesktopMediaQuery();

  return isDesktop ? children : null;
};

export const TabletAndBelow = ({ children }: { children: React.ReactNode }) => {
  const isTabletAndBelow = useTabletAndBelowMediaQuery();

  return isTabletAndBelow ? children : null;
};

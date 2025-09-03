import { useCallback, useMemo, useState } from 'react';

export const useContactUs = () => {
  const [menuPosition, setMenuPosition] = useState<null | { x: number, y: number }>(null);

  const openMenu = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      setMenuPosition({
        x: event.clientX + 2,
        y: event.clientY - 6,
      });
    },
    []
  );

  const closeMenu = useCallback(
    () => {
      setMenuPosition(null);
    },
    []
  );

  return useMemo(() => ({ menuPosition, openMenu, closeMenu }), [closeMenu, menuPosition, openMenu]);
};

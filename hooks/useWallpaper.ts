import { useContext, useEffect } from "react";
import { ThemeContext } from "styled-components";

const useWallpaper = (
  desktopRef: React.RefObject<HTMLElement | null>
): void => {
  const theme = useContext(ThemeContext);
  const wallpaper = theme?.wallpaper;

  useEffect(() => {
    wallpaper?.(desktopRef.current);
  }, [desktopRef, wallpaper]);
};

export default useWallpaper;

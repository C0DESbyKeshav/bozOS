import { useContext, useEffect } from "react";
import { ThemeContext } from "styled-components";

const useWallpaper = (desktopRef: React.RefObject<HTMLElement>): void => {
  const theme = useContext(ThemeContext);
  const wallpaper = theme?.wallpaper;

  useEffect(() => {
    wallpaper?.(desktopRef);
  }, [desktopRef, wallpaper]);
};

export default useWallpaper;

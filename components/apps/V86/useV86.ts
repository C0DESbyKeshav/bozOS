import {
  BOOT_CD_FD_HD,
  BOOT_FD_CD_HD,
  config as v86Config
} from "components/apps/V86/config";
import type {
  V86,
  V86Starter,
  WindowWithV86Starter
} from "components/apps/V86/types";
import { useFileSystem } from "contexts/fileSystem";
import { extname } from "path";
import { useCallback, useEffect, useState } from "react";
import { bufferToUrl, cleanUpBufferUrl, loadFiles } from "utils/functions";

const useV86 = (
  url: string,
  screenContainer: React.MutableRefObject<HTMLDivElement | null>
): V86 => {
  const [emulator, setEmulator] = useState<V86Starter | null>(null);
  const lockMouse = useCallback(() => emulator?.lock_mouse?.(), [emulator]);
  const { fs } = useFileSystem();

  useEffect(() => {
    let v86: V86Starter | null = null;
    let isMounted = true;

    // Guard check inside the main execution path
    if (fs && url && screenContainer?.current) {
      fs.readFile(url, (_error, contents = Buffer.from("")) => {
        if (!isMounted) return;

        loadFiles(["/libs/v86/libv86.js"]).then(() => {
          if (!isMounted) return;

          const isISO = extname(url).toLowerCase() === ".iso";
          const bufferUrl = bufferToUrl(contents);

          v86 = new (window as WindowWithV86Starter).V86Starter({
            memory_size: 256 * 1024 * 1024,
            vga_memory_size: 8 * 1024 * 1024,
            boot_order: isISO ? BOOT_CD_FD_HD : BOOT_FD_CD_HD,
            [isISO ? "cdrom" : "fda"]: {
              async: false,
              size: contents.length,
              url: bufferUrl,
              use_parts: false
            },
            screen_container: screenContainer.current,
            ...v86Config
          });

          v86.add_listener("emulator-loaded", () =>
            cleanUpBufferUrl(bufferUrl)
          );

          setEmulator(v86);
        });
      });
    }

    // Always returns a cleanup function, resolving the ESLint error
    return () => {
      isMounted = false;
      if (v86) {
        (v86 as V86Starter).destroy?.();
      }
    };
  }, [fs, screenContainer, url]);

  return {
    emulator,
    lockMouse
  };
};

export default useV86;

import type { ProcessComponentProps } from "components/system/Processes/RenderProcess";
import Titlebar from "components/system/Window/Titlebar";
import { useProcesses } from "contexts/process";
import useResizable from "hooks/useResizable";
import { type PropsWithChildren } from "react";
import { Rnd } from "react-rnd";
import StyledWindow from "styles/components/system/Window/StyledWindow";
import rndDefaults from "utils/rndDefaults";

const Window = ({ children, id }: PropsWithChildren<ProcessComponentProps>) => {
  const {
    processes: {
      [id]: { maximized, minimized }
    }
  } = useProcesses();
  const { height, width, updateSize } = useResizable(maximized);

  return (
    <Rnd
      enableResizing={!maximized}
      size={{ height, width }}
      onResizeStop={updateSize}
      {...rndDefaults}
    >
      <StyledWindow minimized={minimized}>
        <Titlebar id={id} />
        {children}
      </StyledWindow>
    </Rnd>
  );
};

export default Window;

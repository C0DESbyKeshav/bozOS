import type { ProcessComponentProps } from "components/system/Processes/RenderProcess";
import Titlebar from "components/system/Window/Titlebar";
import { useProcesses } from "contexts/process";
import useDraggableAndResizable from "hooks/useDraggableAndResizable";
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
  const { x, y, updatePosition, height, width, updateSize } =
    useDraggableAndResizable(maximized);

  return (
    <Rnd
      disableDragging={maximized}
      enableResizing={!maximized}
      size={{ height, width }}
      onDragStop={updatePosition}
      onResizeStop={updateSize}
      position={{ x, y }}
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

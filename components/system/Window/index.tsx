import type { ProcessComponentProps } from "components/system/Processes/RenderProcess";
import Titlebar from "components/system/Window/Titlebar";
import { useProcesses } from "contexts/process";
import type { PropsWithChildren } from "react";
import StyledWindow from "styles/components/system/Window/StyledWindow";

const Window = ({ children, id }: PropsWithChildren<ProcessComponentProps>) => {
  const {
    processes: {
      [id]: { minimized }
    }
  } = useProcesses();

  return (
    <StyledWindow minimized={minimized}>
      <Titlebar id={id} />
      {children}
    </StyledWindow>
  );
};

export default Window;

import type { ProcessComponentProps } from "components/system/Processes/RenderProcess";
import { useProcesses } from "contexts/process";
import type { PropsWithChildren } from "react";
import StyledWindow from "styles/components/system/StyledWindow";

const Window = ({ children, id }: PropsWithChildren<ProcessComponentProps>) => {
  const {
    processes: {
      [id]: { minimized }
    }
  } = useProcesses();

  return <StyledWindow minimized={minimized}>{children}</StyledWindow>;
};

export default Window;

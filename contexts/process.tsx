import type { FC, PropsWithChildren } from "react";
import { createContext, useState } from "react";
import type { Processes } from "types/utils/processDirectory";
import processDirectory from "utils/processDirectory";

type ProcessContextState = {
  processes: Processes;
};

const ProcessContext = createContext<ProcessContextState>({ processes: {} });

export const ProcessProvider: FC<PropsWithChildren> = ({ children }) => {
  const [processes] = useState(processDirectory);
  return (
    <ProcessContext.Provider value={{ processes }}>
      {children}
    </ProcessContext.Provider>
  );
};

export default ProcessContext.Consumer;

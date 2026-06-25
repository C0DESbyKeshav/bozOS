import useProcessContextState from "hooks/useProcessContextState";
import type { FC } from "react";
import { createContext } from "react";
import type {
  ProcessContextState,
  ProcessProviderProps
} from "types/contexts/process";
import { initialProcessContextState } from "utils/initialContextStates";

const ProcessContext = createContext<ProcessContextState>(
  initialProcessContextState
);

export const ProcessProvider: FC<ProcessProviderProps> = ({
  children,
  startupProcesses
}) => (
  <ProcessContext.Provider value={useProcessContextState(startupProcesses)}>
    {children}
  </ProcessContext.Provider>
);

export const ProcessConsumer = ProcessContext.Consumer;

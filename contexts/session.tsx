import useSessionContextState from "hooks/useSessionContextState";
import type { FC, PropsWithChildren } from "react";
import { createContext } from "react";
import type { SessionContextState } from "types/contexts/session";
import { initialSessionContextState } from "utils/initialContextStates";

const { Consumer, Provider } = createContext<SessionContextState>(
  initialSessionContextState
);

export const SessionProvider: FC<PropsWithChildren> = ({ children }) => (
  <Provider value={useSessionContextState()}>{children}</Provider>
);

export const SessionConsumer = Consumer;

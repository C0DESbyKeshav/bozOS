import useSessionContextState from "hooks/useSessionContextState";
import type { FC, PropsWithChildren } from "react";
import { createContext } from "react";
import type { SessionContextState } from "types/contexts/session";

const SessionContext = createContext<SessionContextState>({});

export const SessionProvider: FC<PropsWithChildren> = ({ children }) => (
  <SessionContext.Provider value={useSessionContextState()}>
    {children}
  </SessionContext.Provider>
);

export const SessionConsumer = SessionContext.Consumer;

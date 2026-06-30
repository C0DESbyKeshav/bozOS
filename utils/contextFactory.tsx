import { createContext } from "react";

type ContextFactory = <T>(
  initialContextState: T,
  useContextState: () => T
) => {
  Consumer: React.Consumer<T>;
  Provider: React.FC<React.PropsWithChildren>;
};

const contextFactory: ContextFactory = (
  initialContextState,
  useContextState
) => {
  const { Consumer, Provider } = createContext(initialContextState);

  const ProcessProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
    <Provider value={useContextState()}>{children}</Provider>
  );

  return { Consumer, Provider: ProcessProvider };
};

export default contextFactory;

import { createContext, useContext } from "react";

type ContextFactory = <T>(
  initialContextState: T,
  useContextState: () => T
) => {
  Consumer: React.Consumer<T>;
  Provider: React.FC<React.PropsWithChildren>;
  useContext: () => T;
};

const contextFactory: ContextFactory = (
  initialContextState,
  useContextState
) => {
  const Context = createContext(initialContextState);
  const ProcessProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
    <Context.Provider value={useContextState()}>{children}</Context.Provider>
  );

  return {
    Consumer: Context.Consumer,
    Provider: ProcessProvider,
    useContext: () => useContext(Context)
  };
};

export default contextFactory;

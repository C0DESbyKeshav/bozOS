import { SessionConsumer } from "contexts/session";
import type { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import themes from "styles/themes.json";

const StyledApp: FC<PropsWithChildren> = ({ children }) => (
  <>
    <GlobalStyle />
    <SessionConsumer>
      {({ theme = themes.default }) => (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      )}
    </SessionConsumer>
  </>
);

export default StyledApp;

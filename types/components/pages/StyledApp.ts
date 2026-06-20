import type { ReactNode } from "react";
import type { DefaultTheme } from "styled-components";

export type StyledAppProps = {
  children: ReactNode;
  theme?: DefaultTheme;
};

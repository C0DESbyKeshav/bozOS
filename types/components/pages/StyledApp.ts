import type { PropsWithChildren } from "react";

export type Theme = {
  colors: {
    primary: string;
  };
};

export type StyledAppProps = PropsWithChildren<{
  theme?: Theme;
}>;

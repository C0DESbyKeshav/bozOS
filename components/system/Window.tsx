import type { FC, PropsWithChildren } from "react";
import StyledWindow from "styles/components/system/StyledWindow";

const Window: FC<PropsWithChildren> = ({ children }) => (
  <StyledWindow>{children}</StyledWindow>
);

export default Window;

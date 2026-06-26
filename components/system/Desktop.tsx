import type { FC, PropsWithChildren } from "react";
import StyledDesktop from "styles/components/system/StyledDesktop";

const Desktop: FC<PropsWithChildren> = ({ children }) => (
  <StyledDesktop>{children}</StyledDesktop>
);

export default Desktop;

import StyledDesktop from "styles/components/system/StyledDesktop";

const Desktop: React.FC<React.PropsWithChildren> = ({ children }) => (
  <StyledDesktop>{children}</StyledDesktop>
);

export default Desktop;

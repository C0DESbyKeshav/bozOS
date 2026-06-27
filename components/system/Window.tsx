import StyledWindow from "styles/components/system/StyledWindow";

const Window: React.FC<React.PropsWithChildren> = ({ children }) => (
  <StyledWindow>{children}</StyledWindow>
);

export default Window;

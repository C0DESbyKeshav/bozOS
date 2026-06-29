import styled from "styled-components";

const StyledTaskbar = styled.nav`
  background-color: #bf5555;
  bottom: 0;
  height: ${({ theme }) => theme.sizes.taskbar.height};
  left: 0;
  position: absolute;
  right: 0;
  width: 100vw;
`;

export default StyledTaskbar;

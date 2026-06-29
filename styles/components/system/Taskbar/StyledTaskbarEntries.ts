import styled from "styled-components";

const StyledTaskbarEntries = styled.ol`
  background-color: #bf55a4;
  height: 100%;
  left: ${({ theme }) => theme.sizes.startButton.width};
  position: absolute;
  right: ${({ theme }) => theme.sizes.clock.width};
`;

export default StyledTaskbarEntries;

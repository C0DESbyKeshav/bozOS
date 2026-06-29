import styled from "styled-components";

const StyledStartButton = styled.button`
  background-color: #5cbf55;
  height: 100%;
  left: 0;
  position: absolute;
  width: ${({ theme }) => theme.sizes.startButton.width};
`;

export default StyledStartButton;

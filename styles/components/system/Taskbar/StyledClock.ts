import styled from "styled-components";

const StyledClock = styled.time`
  background-color: #c5d327;
  display: flex;
  font-size: ${({ theme }) => theme.fonts.clock.size};
  height: 100%;
  place-content: center;
  place-items: center;
  position: absolute;
  right: 0;
  width: ${({ theme }) => theme.sizes.clock.width};
`;

export default StyledClock;

import styled from "styled-components";

const StyledTaskbarEntry = styled.li`
  background-color: #7555bf;
  display: flex;
  height: 100%;
  place-content: center;
  place-items: center;
  width: ${({ theme }) => theme.sizes.taskbar.entry.width};
`;

export default StyledTaskbarEntry;

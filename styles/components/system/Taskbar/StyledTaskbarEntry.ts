import styled from "styled-components";

const StyledTaskbarEntry = styled.li`
  background-color: #7555bf;
  height: 100%;
  width: ${({ theme }) => theme.sizes.taskbar.entry.width};
`;

export default StyledTaskbarEntry;

import styled from "styled-components";

const StyledTaskbarEntry = styled.li`
  background-color: #7555bf;
  display: flex;
  height: 100%;
  max-width: ${({ theme }) => theme.sizes.taskbar.entry.maxWidth};
  place-content: center;
  place-items: center;
`;

export default StyledTaskbarEntry;

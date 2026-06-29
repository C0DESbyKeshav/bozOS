import TaskbarEntry from "components/system/Taskbar/TaskbarEntry";
import type { JSX } from "react/jsx-runtime";
import StyledTaskbarEntries from "styles/components/system/Taskbar/StyledTaskbarEntries";

const TaskbarEntries = (): JSX.Element => (
  <StyledTaskbarEntries>
    <TaskbarEntry />
  </StyledTaskbarEntries>
);

export default TaskbarEntries;

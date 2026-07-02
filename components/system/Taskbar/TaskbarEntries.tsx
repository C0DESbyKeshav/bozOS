import TaskbarEntry from "components/system/Taskbar/TaskbarEntry";
import { ProcessConsumer } from "contexts/process";
import type { JSX } from "react/jsx-runtime";
import StyledTaskbarEntries from "styles/components/system/Taskbar/StyledTaskbarEntries";

const TaskbarEntries = (): JSX.Element => (
  <StyledTaskbarEntries>
    <ProcessConsumer>
      {({ processes }) =>
        Object.entries(processes).map(([id, { icon, title }]) => (
          <TaskbarEntry key={id} icon={icon} title={title} />
        ))
      }
    </ProcessConsumer>
  </StyledTaskbarEntries>
);

export default TaskbarEntries;

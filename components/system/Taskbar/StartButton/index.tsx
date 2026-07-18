import StyledStartButton from "components/system/Taskbar/StartButton/StyledStartButton";
import WindowsIcon from "components/system/Taskbar/StartButton/WindowsIcon";
import type { JSX } from "react/jsx-runtime";

const StartButton = (): JSX.Element => (
  <StyledStartButton title="Start">
    <WindowsIcon />
  </StyledStartButton>
);

export default StartButton;

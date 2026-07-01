import { faWindows } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { JSX } from "react/jsx-runtime";
import StyledStartButton from "styles/components/system/Taskbar/StyledStartButton";

const StartButton = (): JSX.Element => (
  <StyledStartButton title="Start">
    <FontAwesomeIcon icon={faWindows} />
  </StyledStartButton>
);

export default StartButton;

import dynamic from "next/dynamic";
import type { JSX } from "react/jsx-runtime";

const Window = dynamic(() => import("components/system/Window"));

const withWindow = (Component: React.ComponentType) => (
  <Window>
    <Component />
  </Window>
);

type RenderProcessProps = {
  Component: React.ComponentType;
  hasWindow?: boolean;
};

const RenderProcess = ({
  Component,
  hasWindow = false
}: RenderProcessProps): JSX.Element =>
  hasWindow ? withWindow(Component) : <Component />;

export default RenderProcess;

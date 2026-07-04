import dynamic from "next/dynamic";
import React from "react";
import type { JSX } from "react/jsx-runtime";

const Window = dynamic(() => import("components/system/Window"));

export type ProcessComponentProps = {
  id: string;
};

type RenderProcessProps = {
  Component: React.ComponentType<ProcessComponentProps>;
  hasWindow?: boolean;
  id: string;
};

const RenderProcess = ({
  Component,
  hasWindow = false,
  id
}: RenderProcessProps): JSX.Element =>
  hasWindow ? (
    <Window id={id}>
      <Component id={id} />
    </Window>
  ) : (
    <Component id={id} />
  );

export default RenderProcess;

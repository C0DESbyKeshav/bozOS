import RenderProcess from "components/system/Processes/RenderProcess";
import { ProcessConsumer } from "contexts/process";
import type { JSX } from "react/jsx-runtime";

const ProcessLoader = (): JSX.Element => (
  <ProcessConsumer>
    {({ mapProcesses }) =>
      mapProcesses(([id, { Component, hasWindow }]) => (
        <RenderProcess key={id} Component={Component} hasWindow={hasWindow} />
      ))
    }
  </ProcessConsumer>
);

export default ProcessLoader;

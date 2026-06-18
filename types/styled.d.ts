/* eslint-disable @typescript-eslint/no-empty-object-type */

import "styled-components";

import type themes from "styles/themes.json";

type Theme = typeof themes.default;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

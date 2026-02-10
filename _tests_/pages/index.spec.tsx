import { render } from "@testing-library/react";
import { theme } from "pages/_app";
import Index from "pages/index";
import { ThemeProvider } from "styled-components";

test("renders index page", () => {
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Index />
    </ThemeProvider>
  );
  const helloWorldElement = getByText("Hello Keshav!");

  expect(helloWorldElement).toBeInTheDocument();
});

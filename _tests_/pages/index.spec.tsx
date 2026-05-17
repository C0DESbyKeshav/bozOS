import { render, screen } from "@testing-library/react";
import Index from "pages/index";
import { ThemeProvider } from "styled-components";
import defaultTheme from "themes/default.json";

test("renders index page", () => {
  render(
    <ThemeProvider theme={defaultTheme}>
      <Index />
    </ThemeProvider>
  );

  const helloWorldElement = screen.getByText("Hello Keshav!");

  expect(helloWorldElement).toBeInTheDocument();
});

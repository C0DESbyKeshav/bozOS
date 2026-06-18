import { render, screen } from "@testing-library/react";
import StyledApp from "components/pages/StyledApp";
import Index from "pages/index";

test("renders index page", () => {
  render(
    <StyledApp>
      <Index />
    </StyledApp>
  );

  const helloWorldElement = screen.getByText("Hello Keshav!");

  expect(helloWorldElement).toBeInTheDocument();
});

import { render } from "@testing-library/react";
import StyledApp from "components/pages/StyledApp";
import Index from "pages/index";
import themes from "styles/themes.json";

test("renders index page", () => {
  const { getByText } = render(
    <StyledApp currentTheme={themes.default}>
      <Index />
    </StyledApp>
  );

  expect(getByText("Hello Keshav!")).toBeInTheDocument();
});

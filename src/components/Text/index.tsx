import { render } from "@testing-library/react";
import { ThemedText, ThemedTextSpan } from "./Text";

describe("Test Text", () => {
  it("should render div", () => {
    const { container } = render(<ThemedText>Themed text</ThemedText>);
    expect(container).toMatchInlineSnapshot();
  });

  it("should render span", () => {
    const { container } = render(<ThemedTextSpan>Themed text</ThemedTextSpan>);
    expect(container).toMatchInlineSnapshot();
  });
});

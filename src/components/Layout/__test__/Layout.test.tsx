import { render } from "@testing-library/react";
import Layout from "../Layout";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: ({ children }: { children: JSX.Element }) => <div>{children}</div>,
  useLocation: () => "/",
}));

describe("Layout component", () => {
  it("should match the snapshot", () => {
    const { container } = render(
      <Layout>
        <div>Layout Test</div>
      </Layout>
    );
    expect(container).toMatchSnapshot();
  });
});

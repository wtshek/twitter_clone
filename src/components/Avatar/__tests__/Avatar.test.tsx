import { render } from "@testing-library/react";
import Avatar from "../Avatar";

describe("Avatar component", () => {
  it("should match the snapshot", () => {
    const src = "https://example.com/avatar.jpg";
    const height = 100;
    const width = 100;
    const { container } = render(
      <Avatar src={src} height={height} width={width} />
    );
    expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="rounded-full object-cover"
  >
    <img
      alt="avatar"
      height="100"
      src="https://example.com/avatar.jpg"
      width="100"
    />
  </div>
</div>
`);
  });
});

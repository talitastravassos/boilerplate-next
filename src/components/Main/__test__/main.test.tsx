import { render, screen } from "@testing-library/react";
import { Main } from "../main";

describe("<Main />", () => {
  it("should render the heading", () => {
    const { container } = render(<Main />);

    const head = screen.getByRole(`heading`, { name: /next boilerplate/i });

    //@ts-ignore
    expect(head).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

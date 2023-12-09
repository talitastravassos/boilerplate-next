import { render, screen } from "@testing-library/react";
import { Main } from "../main";

describe("<Main />", () => {
  it("should render the heading", () => {
    render(<Main />);

    const head = screen.getByRole(`heading`, { name: /main page/i });

    //@ts-ignore
    expect(head).toBeInTheDocument();
  });
});

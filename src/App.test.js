import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

describe("<App />", () => {
  it("renders a nav list", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const fb = screen.getByRole("link", {
      name: /facebook/i,
    });
    const ig = screen.getByRole("link", {
      name: /instagram/i,
    });
    expect(fb).toBeInTheDocument();
    expect(ig).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import KLKNotFound from "../pages/KLKNotFound";
import { BrowserRouter } from "react-router-dom";
import NotFoundpage from "../assets/NotFoundpage.jpeg";

describe("<KLKNotFound/>", () => {
  it("renders an image", () => {
    render(
      <BrowserRouter>
        <KLKNotFound />
      </BrowserRouter>
    );
    screen.logTestingPlaygroundURL();
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", NotFoundpage);
  });
});

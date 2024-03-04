import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import { BrowserRouter } from "react-router-dom";
import Homepage from "../assets/Homepage.jpeg";

describe("<Home />", () => {
  it("renders an image", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    screen.logTestingPlaygroundURL();
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", Homepage);
  });
});

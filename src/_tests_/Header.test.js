import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Header from "../components/Header";

describe("<Header />", () => {
  it("navigates to Home page when Home link is clicked", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText("Home"));
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("navigates to Collection page when Collection link is clicked", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText("Collection"));
    expect(screen.getByText("Collection")).toBeInTheDocument();
  });
});

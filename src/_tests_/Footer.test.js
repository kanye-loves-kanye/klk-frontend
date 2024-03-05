import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("<Footer />", () => {
  it("renders app name", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    screen.logTestingPlaygroundURL();

    const footer = screen.getByRole("heading", {
      name: /kanyeloveskanye/i,
    });
    expect(footer).toBeInTheDocument();
  });

  it("renders comapny information", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const footer = screen.getByText(/About us/i);
    expect(footer).toBeInTheDocument();
  });

  it("renders connect with us", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const footer = screen.getByText(/Contact Us/i);
    expect(footer).toBeInTheDocument();
  });

  it("renders social media connections", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const footer = screen.getByText(/Facebook/i);
    expect(footer).toBeInTheDocument();
  });

  it("renders social media connections", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const footer = screen.getByText(/Instagram/i);
    expect(footer).toBeInTheDocument();
  });
});
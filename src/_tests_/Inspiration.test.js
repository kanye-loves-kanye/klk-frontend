import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Inspiration from "../pages/Inspiration";

describe("<Inspiration />", () => {
  it("Generates a Yeezy quote when button is clicked", async () => {
    render(
      <BrowserRouter>
        <Inspiration />
      </BrowserRouter>
    );

    const quoteElement = await screen.getByRole('button', {
      name: /yeezy says,/i
    });
    expect(quoteElement).toBeInTheDocument();
  });
});

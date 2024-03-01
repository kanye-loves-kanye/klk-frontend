import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import App from './App';

describe("<App />", () => {
  it("renders a nav list", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });
});
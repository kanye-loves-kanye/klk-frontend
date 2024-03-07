import TypeOfYe from "../pages/TypeOfYe";
import { BrowserRouter } from "react-router-dom";
import { screen, render } from "@testing-library/react";
describe("<TypeOfYe />", () => {
  it("renders an index link", () => {
    render(
      <BrowserRouter>
        <TypeOfYe />
      </BrowserRouter>
    );
    screen.logTestingPlaygroundURL()
    const indexLink = screen.getByText(/where was kanye west born\?/i);
    expect(indexLink).toBeInTheDocument();

    
  });
});



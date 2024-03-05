import SignUp from "../pages/SignUp";
import { BrowserRouter } from "react-router-dom";
import { screen, render } from "@testing-library/react";
describe("<SignUp />", () => {
  it("renders an index link", () => {
    render(
      <BrowserRouter>
        <SignUp />
      </BrowserRouter>
    );
    
    const indexLink = screen.getByText(/email: password: confirm password:/i);
    expect(indexLink).toBeInTheDocument();
  });
});



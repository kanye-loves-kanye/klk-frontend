import SignIn from "../pages/SignIn";
import { BrowserRouter } from "react-router-dom";
import { screen, render } from "@testing-library/react";
describe("<SignIn />", () => {
  it("renders an index link", () => {
    render(
      <BrowserRouter>
        <SignIn />
      </BrowserRouter>
    );
    const indexLink = screen.getByPlaceholderText(/password/i);
    expect(indexLink).toBeInTheDocument();
  });
});

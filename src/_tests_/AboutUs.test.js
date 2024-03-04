import AboutUs from "../components/AboutUs";
import { BrowserRouter } from "react-router-dom";
import { screen, render } from "@testing-library/react";
describe("<AboutUs />", () => {
  it("renders an index link", () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    );
    screen.logTestingPlaygroundURL();
    const indexLink = screen.getByText(
      /welcome to 'kanyeloveskanye,' the ultimate app for kanye west fans! immerse yourself in the kanye community by connecting with like\-minded fans through personalized questionnaires\. get inspired with a yeezy bot delivering daily kanye quotes, explore his iconic albums, and dive into exclusive merchandise\. if you're a fan of kanye, you're a fan of yourself, and we want the world to love themselves like kanye loves kanye!/i
    );
    expect(indexLink).toBeInTheDocument();
  });
});

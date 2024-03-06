import { render, screen } from "@testing-library/react";
import Collection from "../pages/Collection";
import { BrowserRouter } from "react-router-dom";

// album
import Collegedropout from "../assets/album/Collegedropout.jpg"
import LateRegistration from "../assets/album/LateRegistration.jpg"
import Heartbreak from "../assets/album/Heartbreak.png"
import Graduation from "../assets/album/Graduation.jpg"


describe("<Collection/>", () => {
  it("renders a album name", () => {
    render(
      <BrowserRouter>
        <Collection />
      </BrowserRouter>
    );

    const TheCollegedropoutimage = screen.getByRole('img', {
      name: /college/i
    })
    const TheCollegedropouttext = screen.getByAltText('college', {
      name: /The College Dropout/i
    })
    expect(TheCollegedropouttext).toBeInTheDocument()
    expect(TheCollegedropoutimage).toHaveAttribute("src", Collegedropout);

    const LateRegistrationimage = screen.getByRole('img', {
      name: /late/i
    })
    const LateRegistrationtext = screen.getByAltText('late', {
      name: /Late Registration/i
    })
    expect(LateRegistrationtext).toBeInTheDocument()
    expect(LateRegistrationimage).toHaveAttribute("src", LateRegistration);

    const Graduationimage = screen.getByRole('img', {
      name: /grad/i
    })
    const Gradutiontext = screen.getByAltText('grad', {
      name: /graduation/i
    })
    expect(Gradutiontext).toBeInTheDocument()
    expect(Graduationimage).toHaveAttribute("src", Graduation);


    const heartbreakimage = screen.getByRole('img', {
      name: /808s/i
    })
    const heartbreaktext = screen.getByAltText('808s', {
      name: /808s & heartbreak 2008/i
    })
    expect(heartbreaktext).toBeInTheDocument()
    expect(heartbreakimage).toHaveAttribute("src", Heartbreak);








  });
});

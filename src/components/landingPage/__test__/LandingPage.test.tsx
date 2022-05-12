import { render, screen } from "@testing-library/react";
import { GlobalContextProvider } from "../../../context/globalContext";
import LandingPage from "../LandingPage";

const MockLandingPage = () => {
  return (
    <GlobalContextProvider>
      <LandingPage />
    </GlobalContextProvider>
  );
};

describe("Landing Page", () => {
  it("Element should be present in Page, on Page Load", () => {
    render(<MockLandingPage />);

    const mainElement = screen.getByRole("img");

    expect(mainElement).toBeInTheDocument();
  });

  it("Button should be present in Page", async () => {
    render(<MockLandingPage />);

    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toBeInTheDocument();
  });
});

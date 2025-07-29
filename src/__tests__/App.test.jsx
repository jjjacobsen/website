import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(document.querySelector(".app")).toBeInTheDocument();
  });

  it("renders the main container with fade-in animation", () => {
    render(<App />);
    expect(document.querySelector(".container")).toBeInTheDocument();
  });

  it("renders background effects", () => {
    render(<App />);
    expect(document.querySelector(".background-effects")).toBeInTheDocument();
    expect(document.querySelectorAll(".gradient-orb")).toHaveLength(3);
  });

  it("renders all main sections", () => {
    render(<App />);
    // The components are rendered, we can check for their key elements
    expect(document.querySelector(".hero")).toBeInTheDocument();
    expect(document.querySelector(".about")).toBeInTheDocument();
    expect(document.querySelector(".projects")).toBeInTheDocument();
    expect(document.querySelector(".contact")).toBeInTheDocument();
  });
});

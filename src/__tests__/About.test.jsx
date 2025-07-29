import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "../components/About";

describe("About", () => {
  it("renders about section", () => {
    render(<About />);
    expect(document.querySelector(".about")).toBeInTheDocument();
    expect(document.querySelector("#about")).toBeInTheDocument();
  });

  it("displays section title", () => {
    render(<About />);
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("displays about text content", () => {
    render(<About />);
    expect(
      screen.getByText(/I'm a Senior Software Engineer/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/My tech journey took an unexpected turn during COVID/),
    ).toBeInTheDocument();
    expect(screen.getByText(/Now settled in Nashville/)).toBeInTheDocument();
  });

  it("displays tech stack section", () => {
    render(<About />);
    expect(screen.getByText("Tech Stack")).toBeInTheDocument();
  });

  it("renders all skill items", () => {
    render(<About />);
    const expectedSkills = [
      "AI/ML",
      "Python",
      "CI/CD",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Django",
      "AWS",
    ];

    expectedSkills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });

    const skillItems = document.querySelectorAll(".skill-item");
    expect(skillItems).toHaveLength(8);
  });

  it("has proper layout structure", () => {
    render(<About />);
    expect(document.querySelector(".about-grid")).toBeInTheDocument();
    expect(document.querySelector(".about-text")).toBeInTheDocument();
    expect(document.querySelector(".about-skills")).toBeInTheDocument();
    expect(document.querySelector(".skills-grid")).toBeInTheDocument();
  });
});

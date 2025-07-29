import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Projects from "../components/Projects";

describe("Projects", () => {
  it("renders projects section", () => {
    render(<Projects />);
    expect(document.querySelector(".projects")).toBeInTheDocument();
    expect(document.querySelector("#projects")).toBeInTheDocument();
  });

  it("displays section title", () => {
    render(<Projects />);
    expect(screen.getByText("Featured Projects")).toBeInTheDocument();
  });

  it("renders project cards", () => {
    render(<Projects />);
    const projectCards = document.querySelectorAll(".project-card");
    expect(projectCards).toHaveLength(2);
  });

  it("displays first project details", () => {
    render(<Projects />);
    expect(screen.getByText("Automated CI/CD Pipeline")).toBeInTheDocument();
    expect(
      screen.getByText(/Architected and built a complete CI\/CD pipeline/),
    ).toBeInTheDocument();

    // Check tech stack (use getAllByText for duplicated tech names)
    expect(screen.getAllByText("Python")).toHaveLength(2); // Both projects use Python
    expect(screen.getByText("Docker")).toBeInTheDocument();
    expect(screen.getByText("Bitbucket Pipelines")).toBeInTheDocument();
    expect(screen.getByText("MongoDB")).toBeInTheDocument();
    expect(screen.getByText("VMWare")).toBeInTheDocument();
    expect(screen.getByText("Pytest")).toBeInTheDocument();
    expect(screen.getAllByText("AWS")).toHaveLength(2); // Both projects use AWS
  });

  it("displays second project details", () => {
    render(<Projects />);
    expect(
      screen.getByText("Machine Learning with Twilio"),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Developed a machine learning model/),
    ).toBeInTheDocument();

    // Check tech stack for second project
    expect(screen.getByText("scikit-learn")).toBeInTheDocument();
    expect(screen.getByText("Pandas")).toBeInTheDocument();
  });

  it("has proper project structure", () => {
    render(<Projects />);
    expect(document.querySelector(".projects-grid")).toBeInTheDocument();
    expect(document.querySelectorAll(".project-header")).toHaveLength(2);
    expect(document.querySelectorAll(".project-description")).toHaveLength(2);
    expect(document.querySelectorAll(".project-tech")).toHaveLength(2);
  });

  it("does not render GitHub or live demo links when null", () => {
    render(<Projects />);
    // Both projects have null GitHub and live links, so no links should be rendered
    const githubLinks = screen.queryAllByLabelText("GitHub");
    const liveLinks = screen.queryAllByLabelText("Live Demo");

    expect(githubLinks).toHaveLength(0);
    expect(liveLinks).toHaveLength(0);
  });

  it("renders tech tags for each project", () => {
    render(<Projects />);
    const techTags = document.querySelectorAll(".tech-tag");
    // First project has 7 tech tags, second has 4 tech tags
    expect(techTags.length).toBeGreaterThan(10);
  });
});

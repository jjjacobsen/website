import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "../components/Hero";

describe("Hero", () => {
  it("renders hero section", () => {
    render(<Hero />);
    expect(document.querySelector(".hero")).toBeInTheDocument();
  });

  it("displays the correct name and title", () => {
    render(<Hero />);
    expect(screen.getByText("Jonah Jacobsen")).toBeInTheDocument();
    expect(screen.getByText(/Senior Software Engineer/)).toBeInTheDocument();
    expect(screen.getByText(/AI\/ML Specialist/)).toBeInTheDocument();
    expect(screen.getByText(/DevOps Innovator/)).toBeInTheDocument();
  });

  it("displays the hero description", () => {
    render(<Hero />);
    expect(
      screen.getByText(/Building the future with AI and automation/),
    ).toBeInTheDocument();
  });

  it("renders action buttons with correct links", () => {
    render(<Hero />);

    const resumeLink = screen.getByRole("link", { name: /view resume/i });
    expect(resumeLink).toBeInTheDocument();
    expect(resumeLink).toHaveAttribute("href", "/jonah_jacobsen_resume.pdf");
    expect(resumeLink).toHaveAttribute("target", "_blank");

    const projectsLink = screen.getByRole("link", { name: /view projects/i });
    expect(projectsLink).toBeInTheDocument();
    expect(projectsLink).toHaveAttribute("href", "#projects");
  });

  it("renders social links with correct attributes", () => {
    render(<Hero />);

    const githubLink = screen.getByLabelText("GitHub");
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/jjjacobsen");

    const linkedinLink = screen.getByLabelText("LinkedIn");
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/jonahjacobsen/",
    );

    const emailLink = screen.getByLabelText("Email");
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:jjacobsen115@gmail.com");
  });

  it("renders all social links", () => {
    render(<Hero />);
    const socialLinks = document.querySelectorAll(".social-link");
    expect(socialLinks).toHaveLength(3);
  });
});

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";

describe("Contact", () => {
  it("renders contact section", () => {
    render(<Contact />);
    expect(document.querySelector(".contact")).toBeInTheDocument();
    expect(document.querySelector("#contact")).toBeInTheDocument();
  });

  it("displays section title", () => {
    render(<Contact />);
    expect(screen.getByText("Let's Connect")).toBeInTheDocument();
  });

  it("displays contact intro text", () => {
    render(<Contact />);
    expect(
      screen.getByText(
        /I'm always interested in hearing about new opportunities/,
      ),
    ).toBeInTheDocument();
  });

  it("renders all contact methods", () => {
    render(<Contact />);

    // Check for GitHub
    expect(screen.getByText("GitHub")).toBeInTheDocument();
    expect(screen.getByText("github.com/jjjacobsen")).toBeInTheDocument();

    // Check for LinkedIn
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
    expect(
      screen.getByText("linkedin.com/in/jonahjacobsen"),
    ).toBeInTheDocument();

    // Check for Email
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("jjacobsen115@gmail.com")).toBeInTheDocument();
  });

  it("has correct links for contact methods", () => {
    render(<Contact />);

    const contactMethods = document.querySelectorAll(".contact-method");
    expect(contactMethods).toHaveLength(3);

    // Check GitHub link
    const githubLink = screen.getByRole("link", {
      name: /GitHub github.com\/jjjacobsen/i,
    });
    expect(githubLink).toHaveAttribute("href", "https://github.com/jjjacobsen");

    // Check LinkedIn link
    const linkedinLink = screen.getByRole("link", {
      name: /LinkedIn linkedin.com\/in\/jonahjacobsen/i,
    });
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/jonahjacobsen/",
    );

    // Check Email link
    const emailLink = screen.getByRole("link", {
      name: /Email jjacobsen115@gmail.com/i,
    });
    expect(emailLink).toHaveAttribute("href", "mailto:jjacobsen115@gmail.com");
  });

  it("renders download resume button", () => {
    render(<Contact />);
    const resumeButton = screen.getByRole("link", { name: /download resume/i });
    expect(resumeButton).toBeInTheDocument();
    expect(resumeButton).toHaveAttribute("href", "/jonah_jacobsen_resume.pdf");
    expect(resumeButton).toHaveAttribute(
      "download",
      "jonah_jacobsen_resume.pdf",
    );
  });

  it("renders footer", () => {
    render(<Contact />);
    expect(document.querySelector(".footer")).toBeInTheDocument();
    expect(
      screen.getByText("© 2025 Jonah Jacobsen. Built with React"),
    ).toBeInTheDocument();
  });

  it("has proper layout structure", () => {
    render(<Contact />);
    expect(document.querySelector(".contact-content")).toBeInTheDocument();
    expect(document.querySelector(".contact-methods")).toBeInTheDocument();
    expect(document.querySelector(".contact-cta")).toBeInTheDocument();
  });

  it("applies email class to email contact value", () => {
    render(<Contact />);
    const emailValue = screen.getByText("jjacobsen115@gmail.com");
    expect(emailValue).toHaveClass("email");
  });
});

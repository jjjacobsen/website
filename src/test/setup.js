import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react";

// Configure React Testing Library to use React's act
global.act = act;

// Mock IntersectionObserver for Framer Motion viewport features
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

// src/App.test.js
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
  expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
});

test("renders App-header", () => {
  render(<App />);
  expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
});

test("renders App-body", () => {
  render(<App />);
  expect(
    screen.getByText(/Login to access the full dashboard/i)
  ).toBeInTheDocument();
});

test("renders App-footer", () => {
  render(<App />);
  expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
});
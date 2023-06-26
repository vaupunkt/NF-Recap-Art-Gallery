import { render, screen } from "@testing-library/react";
import Navigation from "./index";

test("renders a Link to `spotlight`", () => {
  render(<Navigation />);
  const link = screen.getByRole("link", { name: /spotlight/i });
  expect(link).toBeInTheDocument();
});

test("renders a Link to `pieces`", () => {
  render(<Navigation />);
  const link = screen.getByRole("link", { name: /pieces/i });
  expect(link).toBeInTheDocument();
});

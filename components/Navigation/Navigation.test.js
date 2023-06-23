import { render, screen } from "@testing-library/react";
import Navigation from "./index";
import Link from "next/link";

test("renders a Link to `spotlight`", () => {
  render(<Navigation />);
  const link = screen.getByRole("Link", { name: /spotlight/i });
  expect(link).toBeInTheDocument();
});

test("renders a Link to `pieces`", () => {
  render(<Navigation />);
  const link = screen.getAllByRole("Link", { name: /pieces/i });
  expect(link).toBeInTheDocument();
});

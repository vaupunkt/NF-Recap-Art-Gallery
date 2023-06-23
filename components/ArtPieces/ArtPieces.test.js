import { render, screen } from "@testing-library/react";
import ArtPieces from ".";

test("renders list elements", () => {
  render(<ArtPieces></ArtPieces>);
  const listitem = screen.getAllByRole("listitem");
  expect(listitem).toBeInTheDocument();
});

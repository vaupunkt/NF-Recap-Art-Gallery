import { render, screen } from "@testing-library/react";
import ArtPieces from ".";
import { pieces } from "@/utils/testPieces";

test("renders list", () => {
  render(<ArtPieces pieces={pieces} />);
  const list = screen.getAllByRole("listitem");
  expect(list).toHaveLength(pieces.length);
});

test("favorite-button is displayed in the ArtPieces-view", () => {
  render(<ArtPieces pieces={pieces} />);
  const favoriteButton = screen.getAllByLabelText(/favorite-button/i);
  expect(favoriteButton).toHaveLength(pieces.length);
});

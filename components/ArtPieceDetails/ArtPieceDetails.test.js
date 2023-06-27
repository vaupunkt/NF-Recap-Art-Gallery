import { render, screen } from "@testing-library/react";
import ArtPieceDetails from ".";
import { piece } from "../../utils/testPiece.js";

test("art piece image is displayed", () => {
  render(
    <ArtPieceDetails
      image={piece.imageSource}
      artist={piece.artist}
      title={piece.title}
      year={piece.year}
      genre={piece.genre}
    />
  );
  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
});

test("art piece title is displayed", () => {
  render(
    <ArtPieceDetails
      image={piece.imageSource}
      artist={piece.artist}
      title={piece.title}
      year={piece.year}
      genre={piece.genre}
    />
  );
  const title = screen.getByRole("heading", { name: piece.title });
  expect(title).toBeInTheDocument();
});

test("art piece artist is displayed", () => {
  render(
    <ArtPieceDetails
      image={piece.imageSource}
      artist={piece.artist}
      title={piece.title}
      year={piece.year}
      genre={piece.genre}
    />
  );
  const artist = screen.getByText(piece.artist);
  expect(artist).toBeInTheDocument();
});

test("art piece year is displayed", () => {
  render(
    <ArtPieceDetails
      image={piece.imageSource}
      artist={piece.artist}
      title={piece.title}
      year={piece.year}
      genre={piece.genre}
    />
  );
  const year = screen.getByText(piece.year);
  expect(year).toBeInTheDocument();
});

test("art piece genre is displayed", () => {
  render(
    <ArtPieceDetails
      image={piece.imageSource}
      artist={piece.artist}
      title={piece.title}
      year={piece.year}
      genre={piece.genre}
    />
  );
  const genre = screen.getByText(piece.genre);
  expect(genre).toBeInTheDocument();
});

test("back-button is displayed", () => {
  render(
    <ArtPieceDetails
      image={piece.imageSource}
      artist={piece.artist}
      title={piece.title}
      year={piece.year}
      genre={piece.genre}
    />
  );
  const button = screen.getByRole("button", { name: /back/i });
  expect(button).toBeInTheDocument();
});

test("favorite-button is displayed in the ArtPiecesDetails-view", () => {
  render(
    <ArtPieceDetails
      image={piece.imageSource}
      artist={piece.artist}
      title={piece.title}
      year={piece.year}
      genre={piece.genre}
    />
  );
  const favoriteButton = screen.getByLabelText(/favorite-button/i);
  expect(favoriteButton).toBeInTheDocument();
});

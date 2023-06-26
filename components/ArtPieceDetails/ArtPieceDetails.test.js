import { render, screen } from "@testing-library/react";
import ArtPieceDetails from ".";

test("art piece image is displayed", () => {
  const piece = {
    slug: "orange-red-and-green",
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    year: "2018",
    genre: "Abstract Painting",
    colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
    dimensions: {
      height: 2432,
      width: 1920,
      type: "jpg",
    },
  };
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
  const piece = {
    slug: "orange-red-and-green",
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    year: "2018",
    genre: "Abstract Painting",
    colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
    dimensions: {
      height: 2432,
      width: 1920,
      type: "jpg",
    },
  };
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
  const piece = {
    slug: "orange-red-and-green",
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    year: "2018",
    genre: "Abstract Painting",
    colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
    dimensions: {
      height: 2432,
      width: 1920,
      type: "jpg",
    },
  };
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
  const piece = {
    slug: "orange-red-and-green",
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    year: "2018",
    genre: "Abstract Painting",
    colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
    dimensions: {
      height: 2432,
      width: 1920,
      type: "jpg",
    },
  };
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
  const piece = {
    slug: "orange-red-and-green",
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    year: "2018",
    genre: "Abstract Painting",
    colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
    dimensions: {
      height: 2432,
      width: 1920,
      type: "jpg",
    },
  };
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
  const piece = {
    slug: "orange-red-and-green",
    artist: "Steve Johnson",
    name: "Orange Red and Green Abstract Painting",
    imageSource:
      "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
    year: "2018",
    genre: "Abstract Painting",
    colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
    dimensions: {
      height: 2432,
      width: 1920,
      type: "jpg",
    },
  };
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

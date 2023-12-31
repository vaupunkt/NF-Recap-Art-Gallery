import { render, screen } from "@testing-library/react";
import Spotlight from "./index";

test("Artpiece image is displayed", () => {
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
  render(<Spotlight image={piece.imageSource} artist={piece.artist} />);
  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
});

test("Artpiece artist is displayed", () => {
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
  render(<Spotlight image={piece.imageSource} artist={piece.artist} />);
  const artist = screen.getByText(piece.artist);
  expect(artist).toBeInTheDocument();
});

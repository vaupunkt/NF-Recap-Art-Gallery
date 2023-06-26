import Spotlight from "@/components/Spotlight/index.js";

export default function SpotlightPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  const randomPiece = pieces[randomIndex];
  return (
    <Spotlight
      image={randomPiece.imageSource}
      artist={randomPiece.artist}
      onToggleFavorite={() => onToggleFavorite(randomPiece.slug)}
      isFavorite={
        artPiecesInfo?.find((piece) => piece.slug === randomPiece.slug)
          ?.isFavorite
      }
    />
  );
}

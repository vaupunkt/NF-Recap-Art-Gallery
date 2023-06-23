import ArtPieces from "../../components/ArtPieces/index.js";

export default function ArtPiecesPage({
  pieces,
  isFavorite,
  handleToggleFavorite,
  artPieceInfo,
}) {
  return (
    <ArtPieces
      isFavorite={isFavorite}
      handleToggleFavorite={handleToggleFavorite}
      pieces={pieces}
      artPieceinfo={artPieceinfo}
    />
  );
}

import ArtPieces from "../../components/ArtPieces/index.js";

export default function ArtPiecesPage({
  pieces,
  onToggleFavorite,
  artPieceInfo,
}) {
  return (
    <ArtPieces
      onToggleFavorite={onToggleFavorite}
      pieces={pieces}
      artPieceInfo={artPieceInfo}
    />
  );
}

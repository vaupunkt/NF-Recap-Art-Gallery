import ArtPieces from "../../components/ArtPieces/index.js";

export default function ArtPiecesPage({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <ArtPieces
      onToggleFavorite={onToggleFavorite}
      pieces={pieces}
      artPiecesInfo={artPiecesInfo}
    />
  );
}

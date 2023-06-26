import ArtPieces from "@/components/ArtPieces";

export default function Favorites({ pieces, onToggleFavorite, artPiecesInfo }) {
  const artPiecesfavorites = artPiecesInfo.filter(
    (artPieceInfo) => artPieceInfo.isFavorite === true
  );
  const favorites = console.log("Favorites: ", artPiecesfavorites);
  return (
    <ArtPieces
      pieces={pieces}
      onToggleFavorite={onToggleFavorite}
      artPiecesInfo={artPiecesInfo}
    ></ArtPieces>
  );
}

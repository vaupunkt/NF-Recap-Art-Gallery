import ArtPieces from "@/components/ArtPieces";

export default function Favorites({ pieces, onToggleFavorite, artPiecesInfo }) {
  const favorites = pieces
    .map((piece) => {
      const artPiece = artPiecesInfo.find(
        (artPiece) =>
          piece.slug === artPiece.slug && artPiece.isFavorite === true
      );
      return { ...piece, ...artPiece };
    })
    .filter((favorite) => favorite.isFavorite === true);

  return (
    <>
      {favorites && (
        <ArtPieces
          pieces={favorites}
          onToggleFavorite={onToggleFavorite}
          artPiecesInfo={artPiecesInfo}
        ></ArtPieces>
      )}
    </>
  );
}

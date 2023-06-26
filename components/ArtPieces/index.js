import ArtPiecesPreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <ul>
      {pieces.map((piece) => {
        const slug = piece.slug;
        return (
          <li key={piece.slug}>
            <ArtPiecesPreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              slug={piece.slug}
              onToggleFavorite={() => onToggleFavorite(slug)}
              isFavorite={
                artPiecesInfo?.find((artPiece) => artPiece.slug === slug)
                  ?.isFavorite
              }
            ></ArtPiecesPreview>
          </li>
        );
      })}
    </ul>
  );
}

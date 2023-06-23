import ArtPiecesPreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <li key={piece.slug}>
            <ArtPiecesPreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              slug={piece.slug}
              onToggleFavorite={onToggleFavorite}
              artPiecesInfo={artPiecesInfo}
            ></ArtPiecesPreview>
          </li>
        );
      })}
    </ul>
  );
}

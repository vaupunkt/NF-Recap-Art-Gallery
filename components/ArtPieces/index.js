import ArtPiecesPreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <ul>
      {pieces.map((piece) => {
        const { isFavorite } = artPiecesInfo.find(
          (info) => info.slug === piece.slug
        ) ?? {
          isFavorite: false,
        };

        return (
          <li key={piece.slug}>
            <ArtPiecesPreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              slug={piece.slug}
              isFavorite={isFavorite}
              onToggleFavorite={onToggleFavorite}
            ></ArtPiecesPreview>
          </li>
        );
      })}
    </ul>
  );
}

import ArtPiecesPreview from "../ArtPiecePreview";

export default function ArtPieces({
  pieces,
  isFavorite,
  handleToggleFavorite,
  artPiecesInfo,
}) {
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
              height={piece.dimensions.height}
              width={piece.dimensions.width}
              slug={piece.slug}
              isFavorite={isFavorite}
              handleToggleFavorite={handleToggleFavorite}
            ></ArtPiecesPreview>
          </li>
        );
      })}
    </ul>
  );
}

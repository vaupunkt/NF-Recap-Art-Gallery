import ArtPiecesPreview from "../ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <li key={piece.slug}>
            <ArtPiecesPreview
              image={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              height={piece.dimensions.height}
              width={piece.dimensions.width}
              slug={piece.slug}
            ></ArtPiecesPreview>
          </li>
        );
      })}
    </ul>
  );
}

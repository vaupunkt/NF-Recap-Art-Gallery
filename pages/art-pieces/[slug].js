import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
}) {
  const router = useRouter();
  const { slug } = router.query;
  const artPiece = pieces.find((piece) => slug === piece.slug);
  console.log(artPiece);

  return (
    <ArtPieceDetails
      image={artPiece.imageSource}
      title={artPiece.name}
      artist={artPiece.artist}
      year={artPiece.year}
      genre={artPiece.genre}
      slug={artPiece.slug}
      onToggleFavorite={() => onToggleFavorite(slug)}
      isFavorite={
        artPiecesInfo?.find((piece) => piece.slug === slug)?.isFavorite
      }
    />
  );
}

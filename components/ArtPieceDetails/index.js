import Image from "next/image";
import FavoriteButton from "../FavoriteButton";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  slug,
  onToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <>
      <button type="button" onClick={() => history.back()}>
        Back
      </button>
      <FavoriteButton
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
        slug={slug}
      />
      <Image src={image} alt={title} height="100" width="100" />
      <h2>{title}</h2>
      <p>{artist}</p>
      <p>{year}</p>
      <p>{genre}</p>
    </>
  );
}

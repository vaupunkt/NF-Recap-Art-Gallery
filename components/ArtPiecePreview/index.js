import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

export default function ArtPiecesPreview({
  image,
  title,
  artist,
  width,
  height,
  slug,
  isFavorite,
  artPiecesInfo,
  handleToggleFavorite,
}) {
  return (
    <>
      <Link href={`/art-pieces/${slug}`}>
        <Image src={image} alt={title} width={250} height={250}></Image>
      </Link>
      <h2>{title}</h2>
      <p>{artist}</p>
      <FavoriteButton
        isFavorite={isFavorite}
        handleToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}

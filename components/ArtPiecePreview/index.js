import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

export default function ArtPiecesPreview({
  image,
  title,
  artist,
  slug,
  artPiecesInfo,
  onToggleFavorite,
}) {
  return (
    <>
      <Link href={`/art-pieces/${slug}`}>
        <Image src={image} alt={title} width={250} height={250}></Image>
      </Link>
      <h2>{title}</h2>
      <p>{artist}</p>
      <FavoriteButton
        artPiecesInfo={artPiecesInfo}
        onToggleFavorite={onToggleFavorite}
        slug={slug}
      />
    </>
  );
}

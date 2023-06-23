import Image from "next/image";
import Link from "next/link";

export default function ArtPiecesPreview({
  image,
  title,
  artist,
  width,
  height,
  slug,
}) {
  return (
    <>
      <Link href={`/art-pieces/${slug}`}>
        <Image src={image} alt={title} width={width} height={height}></Image>
      </Link>
      <h2>{title}</h2>
      <p>{artist}</p>
    </>
  );
}

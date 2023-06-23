import Image from "next/image";

export default function ArtPiecesPreview({
  image,
  title,
  artist,
  width,
  height,
}) {
  return (
    <>
      <Image src={image} alt={title} width={width} height={height}></Image>
      <h2>
        {title}
        <p>{artist}</p>
      </h2>
    </>
  );
}

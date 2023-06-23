import Image from "next/image";

export default function ArtPieceDetails({ image, title, artist, year, genre }) {
  return (
    <>
      <button type="button" onClick={() => history.back()}>
        Back
      </button>
      <Image src={image} alt={title} height="100" width="100" />
      <h2>{title}</h2>
      <p>{artist}</p>
      <p>{year}</p>
      <p>{genre}</p>
    </>
  );
}

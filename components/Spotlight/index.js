import Image from "next/image";
import FavoriteButton from "../FavoriteButton";

export default function Spotlight({
  image,
  artist,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <main>
      <h1>Art gallery</h1>
      <Image
        src={image}
        height={500}
        width={500}
        alt={`A picture from ${artist}`}
      />
      <p>{artist}</p>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
    </main>
  );
}

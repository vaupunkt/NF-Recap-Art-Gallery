import Image from "next/image";

export default function Spotlight({ image, artist }) {
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
    </main>
  );
}

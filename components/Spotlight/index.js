import Image from "next/image";


export default function Spotlight({ image, artist, pieces }) {

  const randomIndex = Math.floor(Math.random() * data.length);

  return (
    <main>
      <h1>Art gallery</h1>
      <Image
        name={pieces[randomIndex].name}
        src={pieces[randomIndex].imageSource}
        height={500}
        width={500}
        alt={`A picture of ${pieces[randomIndex].name} from ${pieces[randomIndex].artist}`}
      />
      <p>{pieces[randomIndex].artist}</p>
    </main>
  );
}

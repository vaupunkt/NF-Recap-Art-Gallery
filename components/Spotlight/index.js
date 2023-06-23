import Image from "next/image";


export default function Spotlight({ image, artist, pieces }) {

  const randomIndex = Math.floor(Math.random() * data.length);

  return (
    <main>
      <h1>Art gallery</h1>
      <Image
        name={data[randomIndex].name}
        src={data[randomIndex].imageSource}
        height={500}
        width={500}
        alt={`A picture of ${data[randomIndex].name} from ${data[randomIndex].artist}`}
      />
      <p>{data[randomIndex].artist}</p>
    </main>
  );
}

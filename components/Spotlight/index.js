import useSWR from "swr";
import Image from "next/image";

const URL = "https://example-apis.vercel.app/api/art";

export default function Spotlight() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error } = useSWR(URL, fetcher, {
    refreshInterval: 1000,
  });

  if (error) {
    return <h1>failed to load</h1>;
  }
  if (!data) {
    return <h1>loading...</h1>;
  }

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

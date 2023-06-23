import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState } from "react";

const url = "https://example-apis.vercel.app/api/art";
const fetcher = async (url) => {
  const res = await fetch(url);
  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(url, fetcher);
  const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  console.log(artPiecesInfo);

  function handleToggleFavorite(slug) {
    setArtPiecesInfo((artPiecesInfo) => {
      const info = artPiecesInfo.find((info) => info.slug === slug);

      if (info) {
        return artPiecesInfo.map((info) =>
          info.slug === slug ? { ...info, isFavorite: !info.isFavorite } : info
        );
      }

      return [...artPiecesInfo, { slug, isFavorite: true }];
    });
  }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const randomIndex = Math.floor(Math.random() * data.length);
  const randomImage = data[randomIndex].imageSource;
  const randomArtist = data[randomIndex].artist;
  const { isFavorite } = artPiecesInfo.find((info) => info.slug === slug) ?? {
    isFavorite: false,
  };

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        image={randomImage}
        artist={randomArtist}
        pieces={data}
        onToggleFavorite={handleToggleFavorite}
        isFavorite={isFavorite}
      />
      <Layout />
    </>
  );
}

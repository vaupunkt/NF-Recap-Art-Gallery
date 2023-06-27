import Spotlight from "@/components/Spotlight/index.js";
import { useEffect, useState } from "react";

export default function SpotlightPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const [currentPiece, setCurrentPiece] = useState(null);

  useEffect(() => {
    const randomPiece = pieces[Math.floor(Math.random() * pieces.length)];
    setCurrentPiece(randomPiece);
  }, [pieces]);

  return (
    <>
      {currentPiece && (
        <Spotlight
          image={currentPiece.imageSource}
          artist={currentPiece.artist}
          onToggleFavorite={() => onToggleFavorite(currentPiece.slug)}
          isFavorite={
            artPiecesInfo?.find((piece) => piece.slug === currentPiece.slug)
              ?.isFavorite
          }
        />
      )}
    </>
  );
}

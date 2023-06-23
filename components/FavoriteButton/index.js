export default function FavoriteButton({
  artPiecesInfo,
  onToggleFavorite,
  slug,
}) {
  const { isFavorite } = artPiecesInfo.find((info) => info.slug === slug) ?? {
    isFavorite: false,
  };
  return (
    <button onClick={() => onToggleFavorite(slug)}>
      {isFavorite ? "👍" : "👎"}
    </button>
  );
}

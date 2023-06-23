export default function FavoriteButton({ isFavorite, onToggleFavorite, slug }) {
  return (
    <button onClick={onToggleFavorite(slug)}>{isFavorite ? "👍" : "👎"}</button>
  );
}

export default function FavoriteButton({ onToggleFavorite, isFavorite }) {
  return <button onClick={onToggleFavorite}>{isFavorite ? "👍" : "👎"}</button>;
}

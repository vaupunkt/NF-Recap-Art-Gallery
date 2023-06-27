export default function FavoriteButton({ onToggleFavorite, isFavorite }) {
  return (
    <button onClick={onToggleFavorite} aria-label="favorite-button">
      {isFavorite ? "👍" : "👎"}
    </button>
  );
}

import Spotlight from "@/components/Spotlight/index.js";

export default function SpotlightPage({ pieces, artist, image }) {
  return <Spotlight image={image} artist={artist} pieces={pieces} />;
}

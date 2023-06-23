import React from "react";
import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="../spotlight">Spotlight</Link>
      </li>
      <li>
        <Link href="../pieces">Art Pieces</Link>
      </li>
    </ul>
  );
}

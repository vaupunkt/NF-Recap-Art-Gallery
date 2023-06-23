import React from "react";
import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <p>
        <Link href="../spotlight">Spotlight</Link>
      </p>

      <p>
        <Link href="../pieces">Pieces</Link>
      </p>
    </>
  );
}

import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/works">Works</Link>
        <Link href="/contacts">Contacts</Link>
      </div>
    </header>
  );
};

export default Header;

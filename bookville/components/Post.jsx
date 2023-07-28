import React from "react";
import Link from "next/link";

const Postik = ({ post }) => {
  return (
    <div>
      <p>Post #{post.id}</p>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link href="/works">Go back</Link>
    </div>
  );
};

export default Postik;

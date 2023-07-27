import Link from "next/link";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

const Works = async () => {
  const posts = await getData();
  return (
    <>
      <h1>Works</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`works/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Works;

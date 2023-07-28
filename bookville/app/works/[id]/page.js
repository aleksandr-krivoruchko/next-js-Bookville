import Postik from "@/components/Post.jsx";

async function getDataById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

const Post = async ({ params }) => {
  const post = await getDataById(params.id);
  return <Postik post={post} />;
};

export default Post;

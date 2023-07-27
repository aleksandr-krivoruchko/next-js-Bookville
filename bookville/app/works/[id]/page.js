async function getDataById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

const Post = async ({ params }) => {
  const post = await getDataById(params.id);
  return (
    <>
      <p>Post #{post.id}</p>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
};

export default Post;

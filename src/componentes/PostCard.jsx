import { useContext } from "react";
import { PostContext } from "../context/PostContext";
function PostCard({ post }) {
  const { DeletePost } = useContext(PostContext);

  return (
    <div key={post.id}>
      <h1>{post.title}</h1>
      <h2>{post.content}</h2>
      <h3>{post.autor}</h3>
      <button onClick={() => DeletePost(post.id)}>Eliminar</button>
    </div>
  );
}

export default PostCard;

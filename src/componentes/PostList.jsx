import { useContext } from "react";
import PostCard from "./PostCard";
import { PostContext } from "../context/PostContext";
import PostMensaje from "./PostMensaje";

function PostList() {
  const { posts } = useContext(PostContext);
  if (posts.length === 0) {
    return <PostMensaje />;
  }
  return (
    <div>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
}
export default PostList;

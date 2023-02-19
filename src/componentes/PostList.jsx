import { useContext } from "react";
import PostCard from "./PostCard";
import PostFav from "./PostFav";
import { PostContext } from "../context/PostContext";
import PostMensaje from "./PostMensaje";

function PostList() {
  const { posts } = useContext(PostContext);
  const { favPosts } = useContext(PostContext);
  if (posts.length === 0) {
    return <PostMensaje />;
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div>
        <span style={{ fontSize: "3rem" }}>Favoritos</span>
        {favPosts.map((favPost, index) => (
          <>
            <PostFav key={index} favPost={favPost} />
          </>
        ))}
      </div>
      <div>
        {posts.map((post, index) => (
          <PostCard className="container" key={index} post={post} />
        ))}
      </div>
    </div>
  );
}
export default PostList;

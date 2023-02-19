import { useContext } from "react";
import { PostContext } from "../context/PostContext";

function PostCard({ post }) {
  const { DeletePost, FavPost } = useContext(PostContext);

  return (
    <div className="card">
      <div className="card__content">
        <div className="card__header">
          <h1 className="card__title">{post.title}</h1>
        </div>
        <p className="card__content">{post.content}</p>
        <p className="card__autor">Autor: {post.autor}</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <button className="card_button" onClick={() => DeletePost(post.id)}>
            🗑
          </button>
          <button className="card_button" onClick={() => FavPost(post.id)}>
            📌
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;

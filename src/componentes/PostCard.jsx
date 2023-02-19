import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { Link } from "react-router-dom";

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
          <Link to={`/edit/${post.id}`}>
            <button>Editar</button>
          </Link>
          <button className="card_button" onClick={() => FavPost(post.Id)}>
            📌
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;

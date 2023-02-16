import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { Link } from "react-router-dom";

function PostCard({ post }) {
  const { DeletePost } = useContext(PostContext);

  return (
    <div className="card">
      <input type="checkbox" id="open-dropdown" />
      <label htmlFor="open-dropdown" className="dropdown-button">
        ⚙️
      </label>
      <div className="dropdown buttons-group">
        <button className="card_button" onClick={() => DeletePost(post.id)}>
          🗑
        </button>
        <button className="card_button">✏</button>
        <Link to={`/edit/${post.id}`}>
          <button>Editar</button>
        </Link>
        <button className="card_button">📌</button>
      </div>
      <div className="card__content">
        <div className="card__header">
          <h1 className="card__title">{post.title}</h1>
        </div>
        <p className="card__content">{post.content}</p>
        <p className="card__autor">Autor: {post.autor}</p>
      </div>
    </div>
  );
}

export default PostCard;

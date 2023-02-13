import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import "../Styles/Cards.css";

function PostCard({ post }) {
  const { DeletePost } = useContext(PostContext);

  return (
    <div className="containerCard">
      <div className="card">
        <div className="card__header">
          <h1 className="card__title">{post.title}</h1>
        </div>
        <p className="card__content">{post.content}</p>
        <p className="card__autor">Autor: {post.autor}</p>
        <button
          className="card__delete-button"
          onClick={() => DeletePost(post.id)}
        >
          🗑
        </button>
        <button className="card__delete-button">✏</button>
        <button className="card__delete-button">📌</button>
      </div>
    </div>
  );
}

export default PostCard;

/* import { Link } from "react-router-dom"; */
{
  /* <Link to={`/edit/${post.id}`}>
    <button>Editar</button>
  </Link> */
}

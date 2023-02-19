import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { Link } from "react-router-dom";

function PostFav({ favPost }) {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__header">
          <h1 className="card__title">{favPost.title}</h1>
        </div>
        <p className="card__content">{favPost.content}</p>
        <p className="card__autor">Autor: {favPost.autor}</p>
      </div>
    </div>
  );
}

export default PostFav;

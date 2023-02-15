import { useState, useContext } from "react";
import { PostContext } from "../context/PostContext";
import "../Styles/Formulario.css";
function PostForm() {
  //Datos
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [autor, setAutor] = useState("");
  const { CreatePost } = useContext(PostContext);
  //Funcion de envio del formulario
  const envio = (e) => {
    e.preventDefault();
    CreatePost({
      title,
      content,
      autor,
    });
    setTitle("");
    setContent("");
    setAutor("");
  };
  //Renderizado
  return (
    <div className="container">
      <form className="form" onSubmit={envio}>
        <input
          className="form__input"
          type="text"
          name="titulo"
          placeholder="Titulo de la publicacion"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
          required
        />
        <textarea
          className="form__textarea"
          name="contenido"
          placeholder="Que estas pensando..."
          onChange={(e) => {
            setContent(e.target.value);
          }}
          value={content}
          required
        ></textarea>
        <input
          className="form__input"
          type="text"
          name="autor"
          placeholder="autor"
          onChange={(e) => {
            setAutor(e.target.value);
          }}
          value={autor}
          required
        />
        <button className="form__button">Guardar</button>
      </form>
    </div>
  );
}
export default PostForm;

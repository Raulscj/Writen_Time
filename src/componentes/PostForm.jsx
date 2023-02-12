import { useState, useContext } from "react";
import { PostContext } from "../context/PostContext";

function PostForm() {
  //Datos
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [autor, setAutor] = useState("");
  const [token, setToken] = useState("");
  const { CreatePost } = useContext(PostContext);
  //Funcion de envio del formulario
  const envio = (e) => {
    e.preventDefault();
    CreatePost({
      title,
      content,
      autor,
      token,
    });
    setTitle("");
    setContent("");
    setAutor("");
    setToken("");
  };
  //Renderizado
  return (
    <form onSubmit={envio}>
      <input
        type="text"
        name="titulo"
        placeholder="escribe tu tarea"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        autoFocus
        required
      />
      <textarea
        name="contenido"
        placeholder="Que estas pensando..."
        onChange={(e) => {
          setContent(e.target.value);
        }}
        value={content}
        required
      ></textarea>
      <input
        type="text"
        name="autor"
        placeholder="autor"
        onChange={(e) => {
          setAutor(e.target.value);
        }}
        value={autor}
        required
      />
      <input
        type="number"
        name="token"
        placeholder="Codigo Personal"
        onChange={(e) => {
          setToken(e.target.value);
        }}
        value={token}
        required
      />
      <button>Guardar</button>
    </form>
  );
}
export default PostForm;

import { useState, useContext } from "react";
import { PostContext } from "../context/PostContext";
import { v4 as uuidv4 } from "uuid";
function PostForm() {
  //Datos

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [autor, setAutor] = useState("");
  const { CreatePost } = useContext(PostContext);
  // Función de envío del formulario
  const envio = (e) => {
    e.preventDefault();
    CreatePost({
      id: uuidv4(),
      title,
      content,
      autor,
    });
    setTitle("");
    setContent("");
    setAutor("");
  };
  // Renderizado
  return (
    <>
      <input type="checkbox" id="open-modal" />
      <label
        htmlFor="open-modal"
        className="modal-button"
        style={{ position: "fixed" }}
      ></label>
      <div className="modal">
        <div className="modal-container">
          <form className="form-tweet" onSubmit={envio}>
            <div className="input-group">
              <input
                className="input"
                type="text"
                id="titulo"
                placeholder="Ej: Una tarde con cafe"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
                autoFocus
                required
              />
              <label htmlFor="titulo" className="input-label">
                Titulo de la publicación
              </label>
            </div>
            <textarea
              className="textarea"
              name="contenido"
              placeholder="Que estas pensando..."
              onChange={(e) => {
                setContent(e.target.value);
              }}
              value={content}
              required
            ></textarea>
            <div className="input-group">
              <input
                className="input"
                type="text"
                id="autor"
                placeholder="Ej: Tu nombre"
                onChange={(e) => {
                  setAutor(e.target.value);
                }}
                value={autor}
                required
              />
              <label htmlFor="autor" className="input-label">
                Autor
              </label>
            </div>
            <div>
              <button className="primario mx-auto">Publicar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default PostForm;

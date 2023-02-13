import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../context/PostContext";

function EditPostPage() {
  const { posts, EditPost } = useContext(PostContext);
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const selectedPost = posts.find((post) => post.id === Number(id));
    setPost(selectedPost);
  }, [posts, id]);

  // Aquí iría el código para manejar la edición del post
  // ...

  return console.log("todo ok");
  // Aquí iría el código para renderizar el formulario
  // ...
}

export default EditPostPage;

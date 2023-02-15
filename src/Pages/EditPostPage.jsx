import { useContext, useState, useEffect } from "react";
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

  return <h1>Gracias por estar aca</h1>;
}

export default EditPostPage;

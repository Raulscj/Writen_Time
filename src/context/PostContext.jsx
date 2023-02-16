import { createContext, useState, useEffect } from "react";
export const PostContext = createContext();

export function PostContextProvider(props) {
  let data = [];
  //Array
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || data;
    setPosts(savedPosts);
  }, []);
  // Crear
  function CreatePost(post) {
    setPosts([
      ...posts,
      {
        id: posts.length,
        title: post.title,
        content: post.content,
        autor: post.autor,
      },
    ]);
    localStorage.setItem("posts", JSON.stringify([...posts, post]));
  }
  //Eliminar
  function DeletePost(postId) {
    setPosts(posts.filter((post) => post.id !== postId));
    localStorage.setItem(
      "posts",
      JSON.stringify(posts.filter((post) => post.id !== postId))
    );
  }
  //Editar
  function EditPost(updatedPost, postId) {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            title: updatedPost.title,
            content: updatedPost.content,
            autor: updatedPost.autor,
          };
        }
        return post;
      })
    );
  }
  return (
    <PostContext.Provider value={{ posts, CreatePost, DeletePost, EditPost }}>
      {props.children}
    </PostContext.Provider>
  );
}

import { createContext, useState, useEffect } from "react";
import { Post as data } from "../data/post";
export const PostContext = createContext();

export function PostContextProvider(props) {
  //Array
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(data);
  }, []);
  //CREAR
  function CreatePost(post) {
    setPosts([
      ...posts,
      {
        id: posts.length,
        title: post.title,
        content: post.content,
        autor: post.autor,
        token: post.token,
      },
    ]);
  }
  //Eliminar
  function DeletePost(postId) {
    setPosts(posts.filter((post) => post.id !== postId));
  }
  return (
    <PostContext.Provider value={{ posts, CreatePost, DeletePost }}>
      {props.children}
    </PostContext.Provider>
  );
}

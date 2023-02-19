import { createContext, useState, useEffect } from "react";
export const PostContext = createContext();

export function PostContextProvider(props) {
  let data = [];
  //Array
  const [posts, setPosts] = useState([]);
  const [postsFav, setPostsFav] = useState([]);
  const [favPosts, setFavPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || data;
    setPosts(savedPosts);
    const savedPostsFav = JSON.parse(localStorage.getItem("postsFav")) || data;
    setPostsFav(savedPostsFav);
  }, []);
  // Crear
  function CreatePost(post) {
    setPosts([
      ...posts,
      {
        id: post.id,
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
  function FavPost(postId) {
    const selectedPost = posts.find((post) => post.id === postId);
    const isFav = favPosts.some((post) => post.id === postId);

    if (isFav) {
      const updatedFavPosts = favPosts.filter((post) => post.id !== postId);
      setFavPosts(updatedFavPosts);
      localStorage.setItem("favPosts", JSON.stringify(updatedFavPosts));
    } else {
      const updatedFavPosts = [...favPosts, selectedPost];
      setFavPosts(updatedFavPosts);
      localStorage.setItem("favPosts", JSON.stringify(updatedFavPosts));
    }
  }
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
    const savedFavPosts = JSON.parse(localStorage.getItem("favPosts")) || [];
    setFavPosts(savedFavPosts);
  }, []);

  return (
    <PostContext.Provider
      value={{ posts, favPosts, CreatePost, DeletePost, FavPost }}
    >
      {props.children}
    </PostContext.Provider>
  );
}

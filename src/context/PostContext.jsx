import { createContext, useState, useEffect } from "react";
export const PostContext = createContext();

export function PostContextProvider(props) {
  let data = [];
  //Array
  const [posts, setPosts] = useState([]);
  const [postsFav, setPostsFav] = useState([]);
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
  //Fav
  function FavPost(postId) {
    let postsFav2 = postsFav;
    console.log(JSON.stringify(postId));
    posts.forEach((t) => {
      if (postId == t.id) {
        if (postsFav2.length) {
          postsFav2.forEach((p, i) => {
            if (p.id == postId) {
              postsFav2.splice(i, 1);
            } else {
              postsFav2.push(t);
            }
          });
        } else {
          postsFav2.push(t);
        }
      }
    });
    localStorage.setItem("postsFav", JSON.stringify(postsFav2));
    setPostsFav(JSON.parse(localStorage.getItem("postsFav")));
    console.log(postsFav);
  }
  return (
    <PostContext.Provider
      value={{ posts, CreatePost, DeletePost, EditPost, FavPost }}
    >
      {props.children}
    </PostContext.Provider>
  );
}

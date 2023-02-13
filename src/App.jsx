import Navbar from "./componentes/Nav";
import PostForm from "./componentes/PostForm";
import PostList from "./componentes/PostList";
function App() {
  /* let observador = false;
  if (localStorage.getItem("currentUser")) {
    observador = true;
  } else {
    observador = false;
  } */
  //RENDERIZADO
  return (
    <>
      <Navbar />
      <hr />
      <hr />
      <PostForm />
      <PostList />
    </>
  );
}
export default App;

import PostForm from "./componentes/PostForm";
import PostList from "./componentes/PostList";
import LoginPage from "./componentes/Inicio/User";
function App() {
  //RENDERIZADO
  return (
    <>
      <PostForm />
      <PostList />
      <hr />
      <LoginPage />
    </>
  );
}
export default App;

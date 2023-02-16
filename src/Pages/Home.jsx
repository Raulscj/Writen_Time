import Navbar from "../componentes/Nav";
import PostForm from "../componentes/PostForm";
import PostList from "../componentes/PostList";

function App() {
  // Renderizado
  return (
    <>
      <Navbar />
      <div className="container">
        <PostForm />
        <PostList />
      </div>
    </>
  );
}
export default App;

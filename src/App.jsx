import Navbar from "./componentes/Nav";
import PostForm from "./componentes/PostForm";
import PostList from "./componentes/PostList";
import "./App.css";
function App() {
  /* let observador = false;
  if (localStorage.getItem("currentUser")) {
    observador = true;
  } else {
    observador = false;
  } */
  //RENDERIZADO
  return (
    <div className="container">
      <nav>
      <Navbar />
      </nav>
      <aside>
      <PostForm />
      </aside>
      <section>
      <PostList />
      </section>
    </div>
  );
}
export default App;

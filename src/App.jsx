import Navbar from "./componentes/Nav";
import PostForm from "./componentes/PostForm";
import PostList from "./componentes/PostList";
import "./App.css";
function App() {
  //RENDERIZADO
  return (
    <div className="Container">
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

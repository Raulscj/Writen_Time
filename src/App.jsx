import Navbar from "./componentes/Nav";
import LoginPage from "./componentes/Inicio/User";
import PostForm from "./componentes/PostForm";
import PostList from "./componentes/PostList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

/* import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"; */
library.add(fab, faCheckSquare, faCoffee);

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
      <div className="App" style={{ fontSize: "10rem", color: blue }}>
        <FontAwesomeIcon icon={faBell} />
      </div>
      <Navbar />
      <hr />
      <LoginPage />
      <hr />
      <PostForm />
      <PostList />
    </>
  );
}
export default App;

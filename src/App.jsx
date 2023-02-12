import PostForm from "./componentes/PostForm";
import PostList from "./componentes/PostList";
import LoginPage from "./componentes/Inicio/User";
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
      <LoginPage />
      {/* if(observador)
      {
        <div>
          <h1>
            Bienvenido a WRITTEN TIME,{" "}
            {JSON.parse(localStorage.getItem("currentUser")).username}!
          </h1>
          <PostForm />
          <PostList />
          <hr />
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      }
      <hr /> */}
    </>
  );
}
export default App;

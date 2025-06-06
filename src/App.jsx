import blogPosts from "./data/blogPosts.js";
import ListaArticoli from "./components/ListaArticoli.jsx";

function App() {

  return (
    <>
      <ListaArticoli
        Posts={blogPosts}
      />
    </>
  )
}

export default App

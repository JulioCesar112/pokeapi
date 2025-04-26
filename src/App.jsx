import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PokedexPage from "./pages/PokedexPage"
import PokeInfoPage from "./pages/PokeInfoPage"
import Error404 from "./pages/Error404"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/pokedex" element={<PokedexPage/>}/>
        <Route path="/pokemon/:id" element={<PokeInfoPage/>}/>
        <Route path="/*" element={<Error404/>}/>
      </Routes>
    </>
  )
}
export default App

import Header from './Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";


const App = () => {
  return (
    /*importation du composant BrowserRouter*/
    /*En mettant le header a la racine avant routes sa permet de ne pas le rapeller sur toutes les pages*/
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/About" element={<About />} />
        <Route path ="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
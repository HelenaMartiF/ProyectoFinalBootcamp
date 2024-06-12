import "./App.scss";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Gallery from "./pages/gallery/Gallery";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
/* import Navigator from "./core/navigator/Navigator"; */
import { useState} from "react";
import { JwtContext } from "./context/jwtContext";
import { RequireAuth } from "./components/RequireAuth";
import FavPage from "./layout/FavPage";
import MoviesPage from "./layout/MoviesPage";
import Watch from "./pages/watch/Watch";
import Footer from "./components/Footer/Footer";
/* import MovieDetail from "./layout/movieDetail/MovieDetail"; */


function App() {
  const [jwt, setJwt] = useState(null); //estas son las variables de contexto
  //BrowserRouter para importar este lo escribimos dentro de return y luego eliminamos, le decimos que cambiamos el nombre a Router y dentro de esta tenemos Routes

  



  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
      <Router>
        {/* <Navigator /> */}
        {/* el navegador va siempre dentro del router, para que nos lleve a los links */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/gallery"
            element={
              <RequireAuth>
                <Gallery />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/favoritos" element={<FavPage/>}/>
          <Route path="/peliculas" element={<MoviesPage />} />
        {/*   <Route path="/pelicula/:id" element={<MovieDetail />} /> */}
          <Route path="/watch" element={<Watch />} />
   

       
        </Routes>
      </Router>
      <Footer/>
    </JwtContext.Provider>

  
  );
}

export default App;

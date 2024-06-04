import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Gallery from "./pages/gallery/Gallery";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navigator from "./core/navigator/Navigator";

function App() {
  return (
    <>
      <Router>
      <Navigator/>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
      </Routes>
      </Router>
    </>
  );
}

export default App;

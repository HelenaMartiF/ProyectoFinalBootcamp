import { Navigate, useLocation } from "react-router-dom";
import { API } from "../services/api";
import { useEffect, useState } from "react";


export const RequireAuth = ({ children }) =>{
/*   let location = useLocation();
  //console.log(location);

  if(!localStorage.getItem("token")){
    return <Navigate to="/login" state={{from:location}} replace/>
  }
  return children */
  let location = useLocation(); //estos son los hijos que tienen
  const [isAuthenticated, setIsAuthenticated] = useState(null);/* segun entra el codigo su estado inicial es null */

  useEffect(() => { /* hace la peticion a la ruta */
  const token = localStorage.getItem("token") /* se obtiene el token almacenado en localStorage */
    if (token) { /* si hay un token  */
      API.get("users/checksession", token).then((res) => {
          console.log(res);
          setIsAuthenticated(true);
        }).catch((err) => {
          console.log("peta aquí");
          console.log(err);
          setIsAuthenticated(false);
        });
    } else {
      setIsAuthenticated(false);
    }
  }, []);/* se ejecuta 1 sola vez */

  if (isAuthenticated === null) {/* se tiene que poner en null porque empieza en null */
    
    return null; 
  }

  if (!isAuthenticated) {/* si es false tiene que navegar al login desde donde estemos en la localización y remplazas la ruta con la otra */
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};
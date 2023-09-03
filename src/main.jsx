import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

// Crea un "root" en el DOM para renderizar la aplicación
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {" "}
    {/* Activa el modo estricto de React */}
    <App /> {/* Renderiza el componente principal de la aplicación */}
  </React.StrictMode> /* Cierra el modo estricto de React */
);

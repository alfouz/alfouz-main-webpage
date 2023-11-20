import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

console.log(`
Benvido á miña páxina
Bienvenido a mi página
Welcome to my webpage
Sei que por agora non ten moitas cousas, pero pouco a pouco irán aparecendo máis proxectos que completarán as funcionalidades.
Existe a posibilidade de que tampouco esté tan vacía como parece para quen sepa buscar...
`);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

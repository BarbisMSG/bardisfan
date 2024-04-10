import { useState, useContext } from "react";
import Contexto from "../context/Contexto";
import { Link } from "react-router-dom";
import "../style/Layout.css";

function Logueado(props) {
  const { desloguearUsuario } = useContext(Contexto);
  const { barrera, usuario } = props;

  //Const para desloguearse
  const deslogueate = () => {
    desloguearUsuario();
  };

  return (
    <>
      <div className="altura">
        <h2>Hola {usuario.email} </h2>
        <p>
          <Link
            to={"https://eloquentjs-es.thedojo.mx/Eloquent_JavaScript.pdf"}
            target="_blanck"
          >
            Descargá JS Elocuente
          </Link>
          <button onClick={deslogueate}>Deslogueate</button>
        </p>
      </div>
    </>
  );
}

export default Logueado;

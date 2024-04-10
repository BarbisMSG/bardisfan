import { useState, useContext } from "react";
import Contexto from "../context/Contexto";
import "../style/Layout.css";

function Deslogueado() {
  const [crear, setCrear] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [pass, setPass] = useState("");
  const { crearUsuario, loginUsuario } = useContext(Contexto);

  //Const para logueo
  const handleLogin = () => {
    loginUsuario(usuario, pass);
  };

  //Const para crear usuario
  const handleCrear = () => {
    crearUsuario(usuario, pass);
  };

  const handleNoTengo = () => {
    setCrear(!crear);
  };

  const handleTexto = (e) => {
    if (e.target.name == "usuario") {
      setUsuario(e.target.value);
    } else {
      setPass(e.target.value);
    }
  };

  return (
    <>
      <div className="contenedor">
        <p>Logueate o creá una cuenta para acceder al contenido</p>
        <div className="logueo">
          {!crear ? (
            <>
              <input
                type="text"
                onChange={handleTexto}
                name="usuario"
                placeholder="email"
              />
              <input
                type="password"
                onChange={handleTexto}
                name="password"
                placeholder="password"
              />
              <button onClick={handleLogin}>Logueate</button>
              <p onClick={handleNoTengo}>No tengo cuenta</p>
            </>
          ) : (
            <>
              <div className="crearCuenta">
                <p>Crea cuenta</p>
                <input
                  type="text"
                  onChange={handleTexto}
                  name="usuario"
                  placeholder="email"
                />
                <input
                  type="password"
                  onChange={handleTexto}
                  name="password"
                  placeholder="password"
                />
                <button onClick={handleCrear}>Crear cuenta</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Deslogueado;

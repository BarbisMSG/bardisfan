import { useState, useEffect, useContext } from "react";
import Logueado from "../components/Logueado";
import Deslogueado from "../components/Deslogueado";
import Contexto from "../context/Contexto";
import "../style/Layout.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getDatabase,
  ref,
  onValue,
  onChildAdded,
  set,
  push,
  update,
  onChildChanged,
  onChildRemoved,
  onChildMoved,
  remove,
} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlSraGR5JPr46FYunvATJLRR494_cWrSQ",
  authDomain: "barbisfan.firebaseapp.com",
  databaseURL: "https://barbisfan-default-rtdb.firebaseio.com",
  projectId: "barbisfan",
  storageBucket: "barbisfan.appspot.com",
  messagingSenderId: "603067337892",
  appId: "1:603067337892:web:6d7d476c1324f394a96a31",
  measurementId: "G-1XSSPB8ZBV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function Home() {
  //const [log, setLog] = useState(false);
  //Const de Firebase para escribir y leer datos
  const db = getDatabase();
  const { estoyDentro, estadoLogin } = useContext(Contexto);

  //Persistencia de usuario
  useEffect(() => {
    estoyDentro();
  }, []);

  //Const para agregar usuarios a la base de datos solo cuando se crea
  const guardarUsuario = (usuario) => {
    console.log("guardo a ", usuario);
    const usuarios = ref(db, "/usuarios/" + usuario.uid);
    set(usuarios, usuario);
  };

  guardarUsuario({ nombre: "pepeloco", uid: 333 });

  return (
    <>
      <div className="altura">
        <h1>BardisFan</h1>
        <p>
          ¿Por qué aprender JS? Bueno, aca va el texto de venta que te dice que
          podés aprender gratis y ganar plata
        </p>
        {!estadoLogin ? (
          <Deslogueado guardarUsuario={guardarUsuario}></Deslogueado>
        ) : (
          <Logueado usuario={estadoLogin}></Logueado>
        )}
      </div>
    </>
  );
}

export default Home;

import Contexto from "./Contexto";
import Reducer from "./Reducer";
import { useReducer } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

function UsarContexto(props) {
  const { children } = props;
  const auth = getAuth();
  const estadoInicial = { usuario: [], estadoLogin: false };
  const [state, dispatch] = useReducer(Reducer, estadoInicial);

  //Creación de usuario desde Contexto
  const crearUsuario = (usuario, pass) => {
    createUserWithEmailAndPassword(auth, usuario, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(userCredential, user);
        dispatch({
          type: "CREAR_USUARIO",
          payload: user,
        });
        guardarUsuario(user);
        //guardarUsuario({ email: user.email, uid: user.uid });
        barrera(user);
        console.log("-------> TENES CUENTA!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        //alert("Por favor revisá tus datos");
      });
  };

  //Login usuario desde Contexto
  const loginUsuario = (usuario, pass) => {
    signInWithEmailAndPassword(auth, usuario, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({
          type: "LOGUEAR_USUARIO",
          payload: user,
        });
        barrera(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  //Desloguear usuario desde Contexto
  const desloguearUsuario = () => {
    signOut(auth)
      .then(() => {
        dispatch({
          type: "DESLOGUEAR_USUARIO",
          payload: null,
        });
        barrera(false);
        console.log("------>> Estas deslogueado");
      })
      .catch((error) => {});
  };

  //Persistencia de usuario desde Contexto
  const estoyDentro = () => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        const uid = user.uid;
        dispatch({
          type: "PERSISTENCIA_USUARIO",
          payload: user,
        });
      } else {
        dispatch({
          type: "USUARIO_NOLOGUEADO",
        });
      }
    });
  };

  const escribirUsuario = () => {};

  return (
    <>
      <Contexto.Provider
        value={{
          crearUsuario,
          loginUsuario,
          desloguearUsuario,
          estoyDentro,
          estadoLogin: state.estadoLogin,
          escribirUsuario,
        }}
      >
        {children}
      </Contexto.Provider>
    </>
  );
}

export default UsarContexto;

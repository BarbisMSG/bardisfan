//TYPES
const CREAR_USUARIO = "CREAR_USUARIO";
const LOGUEAR_USUARIO = "LOGUEAR_USUARIO";
const DESLOGUEAR_USUARIO = "DESLOGUEAR_USUARIO";
const PERSISTENCIA_USUARIO = "PERSISTENCIA_USUARIO";
const USUARIO_NOLOGUEADO = "USUARIO_NOLOGUEADO";
const PUSHEAR_USUARIO = "PUSHEAR_USUARIO";

export default function Reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case CREAR_USUARIO:
      return { ...state, usuario: payload };

    case LOGUEAR_USUARIO:
      return { ...state, usuario: payload };

    case DESLOGUEAR_USUARIO:
      return { ...state, usuario: null };

    case PERSISTENCIA_USUARIO:
      return { ...state, estadoLogin: payload };

    case USUARIO_NOLOGUEADO:
      return { ...state, estadoLogin: false };

    case PUSHEAR_USUARIO:
      return { ...state, usuario: payload };
  }
}

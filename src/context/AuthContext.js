import { createContext, useReducer } from "react";

export const AuthContext = createContext({});

const initialState = {
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        user: {
          email: action.user.email,
          isAuth: true,
          username: action.user.username,
        },
      };
    case "LOGOUT":
      return {
        user: null,
      };
    default:
      return state;
  }
}

function AuthContextWrapper({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextWrapper;

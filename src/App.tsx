import { useEffect, useReducer } from "react";
import { RouterProvider } from "react-router-dom";
import path from "./api/apiUrl";
import UserContext, { defaultUserContextState, userReducer } from "./contexts/userContext";
import router from "./routers/router";

const App = (): JSX.Element => {
  const [state, dispatch] = useReducer(userReducer, defaultUserContextState);

  useEffect(() => {
    const verify = async () => {

      const response = await fetch(`https://localhost:7237/api/${path.verifyUser}`, {
        method: 'POST',
        credentials: 'include',
        mode: 'cors'
      });

      try {
        const json = await response.json();

        dispatch({
          type: 'VERIFY_TOKEN_SUCCESS',
          payload: json
        });
      } catch {
        dispatch({
          type: 'VERIFY_TOKEN_FAILED',
          payload: 'SignOut'
        });
      }

    };
    
    verify();

  }, []);

  return (
    <UserContext.Provider value={{ state, dispatch }} >
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
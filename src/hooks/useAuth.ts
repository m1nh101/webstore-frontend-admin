import { APIFactory, HTTPStatus } from "../api/apiFactory";
import path from "../api/apiUrl";
import { UserCredential, UserSession } from "../common/type";
import { UserContextState } from "../contexts/userContext";
import useUserContext from "./useUserContext";

export type AuthHook = {
  state: UserContextState,
  logout: () => void,
  auth: (credential: UserCredential) => Promise<HTTPStatus>
}

const useAuth = (): AuthHook => {
  const { state, dispatch } = useUserContext();

  const logout = async (): Promise<void> => {
    await new APIFactory(path.logout, 'DELETE').process((_) => {
      console.log(_);
      dispatch({
        type: 'SIGN_OUT',
        payload: 'Unauthenticated'
      });
    });
  }

  const auth = async (credential: UserCredential): Promise<HTTPStatus> => {
    
    return await new APIFactory(path.login, 'POST')
      .withPayload(JSON.stringify(credential))
      .process((res: UserSession) => {
        dispatch({
          type: 'AUTHENTICATE_SUCCESS',
          payload: res
        });
      });
  }

  return { state, logout, auth }
}

export default useAuth;
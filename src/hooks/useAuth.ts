import makeRequest, { APIResponse } from "../api/apiFactory";
import path from "../api/apiUrl";
import { UserCredential, UserSession } from "../common/type";
import { UserContextState } from "../contexts/userContext";
import useUserContext from "./useUserContext";

export type AuthHook = {
  state: UserContextState,
  logout: () => void,
  auth: (credential: UserCredential) => Promise<boolean>
}

const useAuth = (): AuthHook => {
  const { state, dispatch } = useUserContext();

  const logout = async (): Promise<void> => {
    await makeRequest<null>({
      method: 'DELETE',
      url: path.logout
    });

    dispatch({
      type: 'SIGN_OUT',
      payload: 'Unauthenticated'
    });
  }

  const auth = async (credential: UserCredential): Promise<boolean> => {
    const response = await makeRequest<UserSession>({
      url: path.login,
      method: 'POST',
      body: JSON.stringify(credential)
    }) as APIResponse<UserSession>;
  
    if(response.statusCode === 200)
    {
      dispatch({
        type: 'AUTHENTICATE_SUCCESS',
        payload: response.data!
      });

      return true;
    }

    return false;
  }

  return { state, logout, auth }
}

export default useAuth;
import { useContext } from "react";
import UserContext, { UserContextProp } from "../contexts/userContext";

const useUserContext = (): UserContextProp => {
  const { state, dispatch } = useContext(UserContext);

  return { state, dispatch }
}

export default useUserContext;
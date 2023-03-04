import { createContext, Dispatch } from "react";
import { ActionPayload, AuthStatus, SessionFlag, UserSession } from "../common/type";

type UserPayload = UserSession | SessionFlag | AuthStatus;

export type UserContextState = typeof defaultUserContextState

export type UserContextProp = {
  state: UserContextState,
  dispatch: Dispatch<ActionPayload<UserPayload>>
}

export const defaultUserContextState = {
  user: {
    userName: '',
    fullName: '',
    avatar: '',
  } as UserSession,
  session: 'Unauthenticated' as SessionFlag,
  status: 'VerifyingToken' as AuthStatus
}

const initialContextValue: UserContextProp = {
  state: defaultUserContextState,
  dispatch: () => null
}

const UserContext = createContext<UserContextProp>(initialContextValue);

export const userReducer = (state: UserContextState, action: ActionPayload<UserPayload>) => {
  const { type } = action;

  switch (type) {
    case 'AUTHENTICATE_SUCCESS':
      return {
        ...state,
        user: action.payload,
        session: 'Authenticated',
        status: 'VerifyingCredential'
      } as UserContextState

    case 'VERIFY_TOKEN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        session: 'Authenticated',
        status: 'VerifyingCredential'
      } as UserContextState

    case 'VERIFY_TOKEN_FAILED':
      return {
        ...state,
        session: 'Unauthenticated',
        status: 'VerifyingCredential'
      } as UserContextState

    case 'SIGN_OUT':
      return {
        ...state,
        session: 'Unauthenticated',
        status: 'SignOut'
      } as UserContextState

    default:
      return state
  }
}

export default UserContext;
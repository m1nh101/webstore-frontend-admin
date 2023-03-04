export type SessionFlag = "Authenticated" | "Unauthenticated";

export type AuthStatus = "VerifyingToken" | "VerifyingCredential" | "SignOut" 

export type UserCredential = {
  username: string,
  password: string
};

export type UserSession = {
  userName: string,
  fullName: string
  avatar: string,
}

export type ActionPayload<TValue> = {
  type: string,
  payload: TValue
};
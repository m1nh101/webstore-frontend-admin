import React from "react"
import { Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

type ProtectedRouteProps = {
  children: JSX.Element
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {

  const { state } = useAuth();

  if(state.status === 'VerifyingToken')
    return <>...Loading</>

  return state.session === 'Authenticated' ? children : <Navigate replace to="/login"/>
}

export default ProtectedRoute;
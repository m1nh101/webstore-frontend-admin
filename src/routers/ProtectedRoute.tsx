import React from "react"
import { Navigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import Main from "../layout/Main"

const ProtectedRoute: React.FC = () => {

  const { state } = useAuth();

  if(state.status === 'NotVerified')
    return <>...Loading</>

  return state.session === 'Authenticated'
    ? <Main /> : <Navigate to="/login" />
}

export default ProtectedRoute;
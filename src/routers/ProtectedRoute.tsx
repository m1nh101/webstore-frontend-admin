import { useState } from "react"
import { Navigate } from "react-router-dom"

type UserSession = "Authenticated" | "NotAuthenticated"

type ProtectedRouteProps = {
  children: JSX.Element
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
  const [session, setSession] = useState<UserSession>("Authenticated");

  if(!session || session == "NotAuthenticated")
    return <Navigate replace to="/login" />
  
  return children;
}

export default ProtectedRoute;
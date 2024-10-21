import { FC } from "react";
import { TProtectedRoute } from "./type";
import { useSelector } from "../../store/store";
import { userSelector } from "../../features/userSlice/userSlice";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute: FC<TProtectedRoute> = ({ onlyUnAuth = false, component }) => {
  const { isAuthenticated, user } = useSelector(userSelector)
  const location = useLocation()

  if (!isAuthenticated) {
    // return <p>Fuck off</p>
    return <Navigate to='/login' state={{ from: location }} />

  }

  if (!onlyUnAuth && !user) {
    return <Navigate to='/login' state={{ from: location }} />
  }

  if (onlyUnAuth && user) {
    const { from } = location.state ?? { from: { pathname: '/' } }
    return <Navigate to={from} />
  }

  return <>{component}</>
} 

export const OnlyAuth = ProtectedRoute
export const OnlyUnAuth = ({ component }: { component: React.JSX.Element }) => (
  <ProtectedRoute onlyUnAuth component={component} />
)
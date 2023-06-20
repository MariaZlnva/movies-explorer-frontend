import { Navigate } from "react-router-dom";

const ProtectedRoute = ({element: Component, ...props}) => {
  console.log(props.isLoggedIn)
  return (
    props.isLoggedIn ? <Component {...props} /> : <Navigate to="/" replace/>
  )
}

export default ProtectedRoute;


  

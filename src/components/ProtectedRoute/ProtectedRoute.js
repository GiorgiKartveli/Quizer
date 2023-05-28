// import { Navigate } from "react";
// import { Outlet } from "react-router-dom";

const ProtectedRoute = ({ children, redirectPath = "/" }) => {
  const user = localStorage.getItem("AlexanderTheGreat");

  if (!user) {
    // return <Navigate to={redirectPath} />;
    return <h1>Login is required to visit this page!</h1>;
  }
  return children;
};

export default ProtectedRoute;

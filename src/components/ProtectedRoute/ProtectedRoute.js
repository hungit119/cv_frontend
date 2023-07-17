import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute(props) {
  const isAuthenticate = useSelector(
    (state) => state.authenticateReducer.isAuthenticate
  );
  const isLoading = useSelector((state) => state.processReducer.isLoading);
  if (!isAuthenticate && !isLoading)
    return <Navigate to={"/sign-in"} replace />;
  return props.children;
}

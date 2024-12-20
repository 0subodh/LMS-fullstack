import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

function AuthRoute({ children }) {
  // user real data
  const isAuth = true;

  return isAuth ? children : <Navigate to="/signin" />;
}

AuthRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthRoute;

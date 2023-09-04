import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes

const ProtectedRoute = ({ element: Element = null, isAuthenticated = false, ...rest }) => {
  console.log(Element)
  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Element /> : <Navigate to="/login" />}
    />
  );
};

// Add prop type validation
ProtectedRoute.propTypes = {
  element: PropTypes.element, 
  isAuthenticated: PropTypes.bool.isRequired, 
};

export default ProtectedRoute;

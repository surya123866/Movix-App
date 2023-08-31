import PropTypes from "prop-types";

import "./styles.scss";

const Spinner = ({ initial = false }) => {
  return (
    <div className={`loadingSpinner ${initial ? "initial" : ""}`}>
      <svg className="spinner" viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        ></circle>
      </svg>
    </div>
  );
};

Spinner.propTypes = {
  initial: PropTypes.bool.isRequired, // Validate initial prop as a required boolean
};

export default Spinner;

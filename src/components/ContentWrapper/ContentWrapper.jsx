import PropTypes from "prop-types"; // Import PropTypes
import "./styles.scss";

const ContentWrapper = ({ children }) => {
    return <div className="contentWrapper">{children}</div>;
};

// Prop validation using PropTypes
ContentWrapper.propTypes = {
    children: PropTypes.node.isRequired, // Expecting any valid React node as children
};

export default ContentWrapper;

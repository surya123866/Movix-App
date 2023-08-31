import { LazyLoadImage } from "react-lazy-load-image-component";
import PropTypes from "prop-types"; // Import PropTypes
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, className }) => {
    return (
        <LazyLoadImage
            className={className || ""}
            alt=""
            effect="blur"
            src={src}
        />
    );
};

// Prop validation using PropTypes
Img.propTypes = {
    src: PropTypes.string.isRequired, // Expecting a string (image source URL)
    className: PropTypes.string, // Optional string (CSS classes)
};

export default Img;

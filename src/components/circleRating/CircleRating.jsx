import PropTypes from "prop-types"; // Import PropTypes
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./styles.scss";

const CircleRating = ({ rating }) => {
    return (
        <div className="circleRating">
            <CircularProgressbar
                value={rating}
                maxValue={10}
                text={rating}
                styles={buildStyles({
                    pathColor:
                        rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                })}
            />
        </div>
    );
};

// Prop validation using PropTypes
CircleRating.propTypes = {
    rating: PropTypes.number.isRequired, // Expecting a number for rating
};

export default CircleRating;

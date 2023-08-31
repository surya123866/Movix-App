import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import "./styles.scss";

const Genres = ({ data }) => {
    const { genres } = useSelector((state) => state.home);

    return (
        <div className="genres">
            {data?.map((g) => {
                // Check if genres object has the key 'g' and contains a 'name' property
                if (!genres || !genres[g] || !genres[g].name) {
                    return null;
                }
                return (
                    <div key={g} className="genre">
                        {genres[g].name}
                    </div>
                );
            })}
        </div>
    );
};

// Prop validation using PropTypes
Genres.propTypes = {
    data: PropTypes.arrayOf(PropTypes.number).isRequired, // Expecting an array of numbers
};

export default Genres;

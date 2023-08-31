import PropTypes from "prop-types"; // Import PropTypes
import Carousel from "../../../components/carousel/Carousel";
import useFetch from "../../../hooks/useFetch";

const Recommendation = ({ mediaType, id }) => {
  const { data, loading } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );

  return (
    <Carousel
      title="Recommendations"
      data={data?.results}
      loading={loading}
      endpoint={mediaType}
    />
  );
};

// Prop validation using PropTypes
Recommendation.propTypes = {
  mediaType: PropTypes.string.isRequired, // Expecting a string for mediaType
  id: PropTypes.number.isRequired, // Expecting a number for id
};

export default Recommendation;

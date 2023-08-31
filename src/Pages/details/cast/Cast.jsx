import PropTypes from "prop-types"; // Import PropTypes
import { useSelector } from "react-redux";

import "./styles.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadingImage/Img";
import avatar from "../../../assets/avatar.png";

const Cast = ({ data, loading }) => {
  //console.log("Received data in Cast:", data);
  const { url } = useSelector((state) => state.home);
  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <div className="castSection">
      <ContentWrapper>
        <div className="sectionHeading">Top Cast</div>
        {!loading ? (
          <div className="listItems">
            {data?.map((item) => {
              let imgUrl = item.profile_path
                ? url.profiles + item.profile_path
                : avatar;
              return (
                <div key={item.id} className="listItem">
                  <div className="profileImg">
                    <Img src={`${imgUrl}`} />{" "}
                  </div>
                  <div className="name">{item.name}</div>
                  <div className="character">{item.character}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="castSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

// Prop validation using PropTypes
Cast.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired, // Expecting an array of objects for data
  loading: PropTypes.bool.isRequired, // Expecting a boolean for loading
};

export default Cast;

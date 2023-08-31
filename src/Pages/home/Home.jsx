import "./styles.scss";
import HeroBanner from "./heroBanner/heroBanner";
import Trending from "./trending/Trending";
import TopRated from "./topRated/TopRated";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <TopRated />
    </div>
  );
};

export default Home;

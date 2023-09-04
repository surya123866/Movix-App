import "./styles.scss";
import HeroBanner from "./heroBanner/heroBanner";
import Trending from "./trending/Trending";
import TopRated from "./topRated/TopRated";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="homePage">
        <HeroBanner />
        <Trending />
        <TopRated />
      </div>
      <Footer />
    </>
  );
};

export default Home;

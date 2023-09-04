import "./styles.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const PageNotFound = () => {
  return (
    <>
      <Header />
      <div className="pageNotFound">
        <ContentWrapper>
          <span className="bigText">404</span>
          <span className="smallText">Page not found!</span>
        </ContentWrapper>
      </div>
      <Footer/>
    </>
  );
};

export default PageNotFound;

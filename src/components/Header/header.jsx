import { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./styles.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };

  const navigationHandler = (type) => {
    let path = "";

    switch (type) {
      case "home":
        path = "/home";
        break;
      case "movie":
        path = "/explore/movie";
        break;
      case "TV":
        path = "/explore/tv";
        break;
      default:
        path = "/account";
        break;
    }

    navigate(path);
    setMobileMenu(false);
  };

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""}  ${show}`}>
      <ContentWrapper>
        <div className="logo">
          <img
            src={logo}
            alt="logo"
            onClick={() => navigationHandler("home")}
            className="logo"
          />
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigationHandler("movie")}>
            Movies
          </li>
          <li className="menuItem" onClick={() => navigationHandler("TV")}>
            TV Shows
          </li>
          {mobileMenu ? (
            <li
              className="menuItem"
              onClick={() => navigationHandler("account")}
            >
              Account
            </li>
          ) : (
            ""
          )}
          <li className="menuItem">
            {mobileMenu ? (
              ""
            ) : (
              <>
                <HiOutlineSearch onClick={openSearch} />
                <li className="menuItem">
                  <img
                    src="https://res.cloudinary.com/dtghbuzfj/image/upload/v1686459977/Avatar_pjoiug.png"
                    alt="avatar"
                    className="menuItem"
                    onClick={() => navigationHandler("account")}
                  />
                </li>
              </>
            )}
          </li>
        </ul>
        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />

          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>
      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movie or a TV show..."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <VscChromeClose
                onClick={() => {
                  setShowSearch(false);
                }}
              />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;

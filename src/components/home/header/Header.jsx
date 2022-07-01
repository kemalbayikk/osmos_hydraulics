import React, { useState, useEffect } from "react";
import * as Scroll from "react-scroll";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.screenY > 200);
  });

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".header");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  let LinkToScroll = Scroll.Link;

  return (
    <>
      <header className="header">
        <div className="container flex">
          <div className="logo">
            <img src="assets/osmos_logo.png" alt="" className="logo" />
          </div>
          <div className="nav">
            <ul
              className={sidebar ? "nav-links-sidebar" : "nav-links"}
              onClick={() => setSidebar(false)}
            >
              <li>
                <LinkToScroll
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={1000}
                >
                  Anasayfa
                </LinkToScroll>
              </li>
              <li>
                <LinkToScroll
                  to="urunlerimiz"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  Ürünlerimiz
                </LinkToScroll>
              </li>
              <li>
                <LinkToScroll
                  to="hakkimizda"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  Hakkımızda
                </LinkToScroll>
              </li>
              <li>
                <LinkToScroll
                  to="iletisim"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={1000}
                >
                  İletişim
                </LinkToScroll>
              </li>
              <li className="icon"></li>
            </ul>
          </div>
          <button
            className="navbar-items-icon"
            onClick={() => setSidebar(!sidebar)}
          >
            {sidebar ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;

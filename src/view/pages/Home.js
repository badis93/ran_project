import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  return (
    <div>
      <div
        data-w-id="8c3f2129-5beb-d66c-8280-7487acb77232"
        className="preload-screen"
      >
        <img
          src="https://assets.website-files.com/60228ac4ff92bcfde58d2cdc/6029415a400a92b09460d461_logo_wb.png"
          loading="lazy"
          data-w-id="8c3f2129-5beb-d66c-8280-7487acb77233"
          alt=""
          className="preload-image"
        />
      </div>
      <nav className="navbar homepage">
        <div className="navbar-container">
          <div className="navbar-left">
            <a
              onClick={() => navigate("/")}
              className="navbar-brand w-inline-block w--current"
            >
              <img
                src="https://assets.website-files.com/60228ac4ff92bcfde58d2cdc/6029412bad7fda49bbb71dce_logo_bw.png"
                loading="lazy"
                alt="Arc Studio logo
"
              />
            </a>
          </div>
          <div className="navbar-mid">
            <ul role="list" className="navbar-menu w-list-unstyled">
              <li className="navbar-menu-item first-child">
                <a
                  onClick={() => navigate("/studio")}
                  className="navbar-menu-item-link"
                >
                  Studio
                </a>
              </li>
              <li className="navbar-menu-item">
                <a
                  onClick={() => navigate("/projects")}
                  className="navbar-menu-item-link"
                >
                  Projects
                </a>
              </li>
              <li className="navbar-menu-item">
                <a
                  onClick={() => navigate("/blog")}
                  className="navbar-menu-item-link"
                >
                  Blog
                </a>
              </li>
              <li className="navbar-menu-item last-child">
                <a
                  onClick={() => navigate("/contact")}
                  className="navbar-menu-item-link"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-right">
            <div className="navbar-button">
              <a
                onClick={() => window.open("https://www.facebook.com")}
                className="nav-social-links"
              >
                Fb
              </a>
              <a
                onClick={() => window.open("https://www.instagram.com")}
                className="nav-social-links last"
              >
                Ig
              </a>
            </div>
            <div className="mobile-menu-button">
              <div className="bar top" />
              <div className="bar middle" />
              <div className="bar bottom" />
            </div>
          </div>
        </div>
      </nav>
      <div
        data-w-id="858db959-1796-ae49-8ee6-fbae9528ce45"
        className="mobile-menu"
      >
        <div className="menu-header">
          <div className="menu-logo">
            <img
              src="https://assets.website-files.com/60228ac4ff92bcfde58d2cdc/602940dfbd9e72c79a310c88_arc_logo.png"
              loading="lazy"
              alt="Arc Studio logo"
              className="main-menu-logo"
            />
          </div>
          <div
            data-w-id="858db959-1796-ae49-8ee6-fbae9528ce49"
            className="close"
          >
            <div className="close-bar top" />
            <div className="close-bar bottom" />
          </div>
        </div>
        <div className="mobile-menu-wrapper">
          <div className="mobile-menu-inner">
            <div className="mobile-menu-links">
              <a
                onClick={() => navigate("/studio")}
                className="mbile-menu-link w-inline-block"
              >
                <h3 className="mobile-menu-text">Studio</h3>
              </a>
              <a
                onClick={() => navigate("/projects")}
                className="mbile-menu-link w-inline-block"
              >
                <h3 className="mobile-menu-text">Projects</h3>
              </a>
              <a
                onClick={() => navigate("/blog")}
                className="mbile-menu-link w-inline-block"
              >
                <h3 className="mobile-menu-text">Blog</h3>
              </a>
            </div>
            <a
              onClick={() => navigate("/contact")}
              className="main-button w-button"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="fullscreen-hero wf-section">
        <div
          data-delay={6000}
          data-animation="cross"
          className="slider-hero w-slider"
          data-autoplay="true"
          data-easing="ease"
          data-hide-arrows="false"
          data-disable-swipe="false"
          data-autoplay-limit={0}
          data-nav-spacing={3}
          data-duration={2000}
          data-infinite="true"
        >
          <div className="w-slider-mask">
            <div className="slide one w-slide">
              <div data-w-id="Div Block" className="hero-slider-title">
                <div className="hero-overline-text small-caps-text">
                  Barcelona, Spain
                </div>
                <h2 className="hero-main-title">
                  Clamp Guard 52 Luxurious Apartments
                </h2>
              </div>
            </div>
            <div className="slide two w-slide">
              <div className="hero-slider-title">
                <div className="hero-overline-text small-caps-text">
                  Barcelona, Spain
                </div>
                <h2 className="hero-main-title">Heaven Gates Apartments</h2>
              </div>
            </div>
            <div className="slide three w-slide">
              <div className="hero-slider-title">
                <div className="hero-overline-text small-caps-text">
                  Barcelona, Spain
                </div>
                <h2 className="hero-main-title">Galaxy Estate Homes</h2>
              </div>
            </div>
          </div>
          <div className="left-arrow w-slider-arrow-left">
            <div className="icon w-icon-slider-left" />
          </div>
          <div className="right-arrow w-slider-arrow-right">
            <div className="icon w-icon-slider-right" />
          </div>
          <div className="slide-nav w-slider-nav w-round" />
        </div>
      </div>
    </div>
  );
};

export default Home;

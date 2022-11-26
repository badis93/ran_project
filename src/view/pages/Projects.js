import React from "react";

const Projects = () => {
  return (
    <div>
      <nav className="navbar navbar-shadow">
        <div className="navbar-container">
          <div className="navbar-left">
            <a href="/" className="navbar-brand w-inline-block">
              <img
                src="https://assets.website-files.com/60228ac4ff92bcfde58d2cdc/602940dfbd9e72c79a310c88_arc_logo.png"
                loading="lazy"
                alt="Arc Studio logo"
              />
            </a>
          </div>
          <div className="navbar-mid">
            <ul role="list" className="navbar-menu w-list-unstyled">
              <li className="navbar-menu-item first-child">
                <a href="/studio" className="navbar-menu-item-link dark">
                  Studio
                </a>
              </li>
              <li className="navbar-menu-item">
                <a
                  href="/projects"
                  aria-current="page"
                  className="navbar-menu-item-link dark w--current"
                >
                  Projects
                </a>
              </li>
              <li className="navbar-menu-item">
                <a href="/blog" className="navbar-menu-item-link dark">
                  Blog
                </a>
              </li>
              <li className="navbar-menu-item last-child">
                <a href="/contact" className="navbar-menu-item-link dark">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-right">
            <div className="navbar-button">
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="nav-social-links dark"
              >
                Fb
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="nav-social-links dark last"
              >
                Ig
              </a>
            </div>
            <div className="mobile-menu-button">
              <div className="bar dark top" />
              <div className="bar dark middle" />
              <div className="bar dark bottom" />
            </div>
          </div>
        </div>
      </nav>
      <div className="w-dyn-list">
        <div role="list" className="project-grid w-dyn-items">
          <div role="listitem" className="project-item w-dyn-item">
            <a
              data-w-id="Link Block"
              href="/project/town-place-walkups-villa"
              className="project-link-block w-inline-block"
            >
              <img
                src="https://assets.website-files.com/6023e39f55d84148925a28be/6025b2429a7d11794aeafa1c_image-13.jpg"
                loading="lazy"
                alt="Town Place Walkups Villa"
                sizes="100vw"
                srcSet="
                https://assets.website-files.com/6023e39f55d84148925a28be/6025b2429a7d11794aeafa1c_image-13-p-500.jpeg  500w,
                https://assets.website-files.com/6023e39f55d84148925a28be/6025b2429a7d11794aeafa1c_image-13.jpg        1200w
              "
                className="image"
              />
              <div className="project-info-block">
                <h5 className="project-info-name">Town Place Walkups Villa</h5>
                <p className="no-margin">Lulu, Motenegro</p>
              </div>
              <div data-w-id="Div Block" className="project-overlay">
                <div className="project-info-wrapper">
                  <div className="project-overline small-caps-text">2020</div>
                  <h4 className="project-name">Town Place Walkups Villa</h4>
                </div>
                <div className="view-project">View Project</div>
              </div>
            </a>
          </div>
          <div role="listitem" className="project-item w-dyn-item">
            <a
              data-w-id="Link Block"
              href="/project/green-ribbon-apartments"
              className="project-link-block w-inline-block"
            >
              <img
                src="https://assets.website-files.com/6023e39f55d84148925a28be/6025b258073fb0114a37ffc9_image-12.jpg"
                loading="lazy"
                alt="Green Ribbon Apartments"
                sizes="100vw"
                srcSet="
                https://assets.website-files.com/6023e39f55d84148925a28be/6025b258073fb0114a37ffc9_image-12-p-500.jpeg   500w,
                https://assets.website-files.com/6023e39f55d84148925a28be/6025b258073fb0114a37ffc9_image-12-p-800.jpeg   800w,
                https://assets.website-files.com/6023e39f55d84148925a28be/6025b258073fb0114a37ffc9_image-12-p-1080.jpeg 1080w,
                https://assets.website-files.com/6023e39f55d84148925a28be/6025b258073fb0114a37ffc9_image-12.jpg         1200w
              "
                className="image"
              />
              <div className="project-info-block">
                <h5 className="project-info-name">Green Ribbon Apartments</h5>
                <p className="no-margin">Mallorca, Spain</p>
              </div>
              <div data-w-id="Div Block" className="project-overlay">
                <div className="project-info-wrapper">
                  <div className="project-overline small-caps-text">2019</div>
                  <h4 className="project-name">Green Ribbon Apartments</h4>
                </div>
                <div className="view-project">View Project</div>
              </div>
            </a>
          </div>
          <div role="listitem" className="project-item w-dyn-item">
            <a
              data-w-id="Link Block"
              href="/project/clint-minded-manor"
              className="project-link-block w-inline-block"
            >
              <img
                src="https://assets.website-files.com/6023e39f55d84148925a28be/6025b2acb2e9787a73805d06_image-14.jpg"
                loading="lazy"
                alt="Clint Minded Manor"
                sizes="100vw"
                srcSet="
                https://assets.website-files.com/6023e39f55d84148925a28be/6025b2acb2e9787a73805d06_image-14-p-500.jpeg   500w,
                https://assets.website-files.com/6023e39f55d84148925a28be/6025b2acb2e9787a73805d06_image-14-p-800.jpeg   800w,
                https://assets.website-files.com/6023e39f55d84148925a28be/6025b2acb2e9787a73805d06_image-14-p-1080.jpeg 1080w,
                https://assets.website-files.com/6023e39f55d84148925a28be/6025b2acb2e9787a73805d06_image-14.jpg         1200w
              "
                className="image"
              />
              <div className="project-info-block">
                <h5 className="project-info-name">Clint Minded Manor</h5>
                <p className="no-margin">Madrid, Spain</p>
              </div>
              <div data-w-id="Div Block" className="project-overlay">
                <div className="project-info-wrapper">
                  <div className="project-overline small-caps-text">2020</div>
                  <h4 className="project-name">Clint Minded Manor</h4>
                </div>
                <div className="view-project">View Project</div>
              </div>
            </a>
          </div>
          <div role="listitem" className="project-item w-dyn-item">
            <a
              data-w-id="Link Block"
              href="/project/alby-luxury-landing"
              className="project-link-block w-inline-block"
            >
              <img
                src="https://assets.website-files.com/6023e39f55d84148925a28be/6025b2cd20998efb6b7345e4_image-18.jpg"
                loading="lazy"
                alt="Alby Luxury Landing"
                sizes="100vw"
                srcSet="
                https://assets.website-files.com/6023e39f55d84148925a28be/6025b2cd20998efb6b7345e4_image-18-p-500.jpeg   500w,
                https://assets.website-files.com/6023e39f55d84148925a28be/6025b2cd20998efb6b7345e4_image-18-p-800.jpeg   800w,
                https://assets.website-files.com/6023e39f55d84148925a28be/6025b2cd20998efb6b7345e4_image-18-p-1080.jpeg 1080w,
                https://assets.website-files.com/6023e39f55d84148925a28be/6025b2cd20998efb6b7345e4_image-18.jpg         1200w
              "
                className="image"
              />
              <div className="project-info-block">
                <h5 className="project-info-name">Alby Luxury Landing</h5>
                <p className="no-margin">Barcelona, Spain</p>
              </div>
              <div data-w-id="Div Block" className="project-overlay">
                <div className="project-info-wrapper">
                  <div className="project-overline small-caps-text">2018</div>
                  <h4 className="project-name">Alby Luxury Landing</h4>
                </div>
                <div className="view-project">View Project</div>
              </div>
            </a>
          </div>
          <div role="listitem" className="project-item w-dyn-item">
            <a
              data-w-id="Link Block"
              href="/project/base-terminal-jetty"
              className="project-link-block w-inline-block"
            >
              <img
                src="https://assets.website-files.com/6023e39f55d84148925a28be/6025b3100f96e1ea5e9c33eb_image-15.jpg"
                loading="lazy"
                alt="Base Terminal Jetty"
                sizes="100vw"
                srcSet="
                https://assets.website-files.com/6023e39f55d84148925a28be/6025b3100f96e1ea5e9c33eb_image-15-p-500.jpeg   500w,
                https://assets.website-files.com/6023e39f55d84148925a28be/6025b3100f96e1ea5e9c33eb_image-15-p-800.jpeg   800w,
                https://assets.website-files.com/6023e39f55d84148925a28be/6025b3100f96e1ea5e9c33eb_image-15-p-1080.jpeg 1080w,
                https://assets.website-files.com/6023e39f55d84148925a28be/6025b3100f96e1ea5e9c33eb_image-15.jpg         1200w
              "
                className="image"
              />
              <div className="project-info-block">
                <h5 className="project-info-name">Base Terminal Jetty</h5>
                <p className="no-margin">Krakow, Burundi</p>
              </div>
              <div data-w-id="Div Block" className="project-overlay">
                <div className="project-info-wrapper">
                  <div className="project-overline small-caps-text">2020</div>
                  <h4 className="project-name">Base Terminal Jetty</h4>
                </div>
                <div className="view-project">View Project</div>
              </div>
            </a>
          </div>
          <div role="listitem" className="project-item w-dyn-item">
            <a
              data-w-id="Link Block"
              href="/project/eye-on-hills-homes"
              className="project-link-block w-inline-block"
            >
              <img
                src="https://assets.website-files.com/6023e39f55d84148925a28be/6025b283a11029d99cf4eab8_image-11.jpg"
                loading="lazy"
                alt="Eye On Hills Homes"
                sizes="100vw"
                srcSet="
                https://assets.website-files.com/6023e39f55d84148925a28be/6025b283a11029d99cf4eab8_image-11-p-500.jpeg  500w,
                https://assets.website-files.com/6023e39f55d84148925a28be/6025b283a11029d99cf4eab8_image-11.jpg        1200w
              "
                className="image"
              />
              <div className="project-info-block">
                <h5 className="project-info-name">Eye On Hills Homes</h5>
                <p className="no-margin">Madrid, Spain</p>
              </div>
              <div data-w-id="Div Block" className="project-overlay">
                <div className="project-info-wrapper">
                  <div className="project-overline small-caps-text">2021</div>
                  <h4 className="project-name">Eye On Hills Homes</h4>
                </div>
                <div className="view-project">View Project</div>
              </div>
            </a>
          </div>
          <div role="listitem" className="project-item w-dyn-item">
            <a
              data-w-id="Link Block"
              href="/project/clamp-guard-52-luxurious-apartments"
              className="project-link-block w-inline-block"
            >
              <img
                src="https://assets.website-files.com/6023e39f55d84148925a28be/6025b33ed4add01d3f2a71f8_image-10.jpg"
                loading="lazy"
                alt="Clamp Guard 52 luxurious apartments"
                sizes="100vw"
                srcSet="
                https://assets.website-files.com/6023e39f55d84148925a28be/6025b33ed4add01d3f2a71f8_image-10-p-500.jpeg  500w,
                https://assets.website-files.com/6023e39f55d84148925a28be/6025b33ed4add01d3f2a71f8_image-10.jpg        1200w
              "
                className="image"
              />
              <div className="project-info-block">
                <h5 className="project-info-name">
                  Clamp Guard 52 luxurious apartments
                </h5>
                <p className="no-margin">Barcelona, Spain</p>
              </div>
              <div data-w-id="Div Block" className="project-overlay">
                <div className="project-info-wrapper">
                  <div className="project-overline small-caps-text">2019</div>
                  <h4 className="project-name">
                    Clamp Guard 52 luxurious apartments
                  </h4>
                </div>
                <div className="view-project">View Project</div>
              </div>
            </a>
          </div>
          <div role="listitem" className="project-item w-dyn-item">
            <a
              data-w-id="Link Block"
              href="/project/cascade-heights"
              className="project-link-block w-inline-block"
            >
              <img
                src="https://assets.website-files.com/6023e39f55d84148925a28be/6025b34da3ec420f24b08787_image-17.jpg"
                loading="lazy"
                alt="Cascade Height Flats"
                sizes="100vw"
                srcSet="
                https://assets.website-files.com/6023e39f55d84148925a28be/6025b34da3ec420f24b08787_image-17-p-500.jpeg   500w,
                https://assets.website-files.com/6023e39f55d84148925a28be/6025b34da3ec420f24b08787_image-17-p-800.jpeg   800w,
                https://assets.website-files.com/6023e39f55d84148925a28be/6025b34da3ec420f24b08787_image-17-p-1080.jpeg 1080w,
                https://assets.website-files.com/6023e39f55d84148925a28be/6025b34da3ec420f24b08787_image-17.jpg         1200w
              "
                className="image"
              />
              <div className="project-info-block">
                <h5 className="project-info-name">Cascade Height Flats</h5>
                <p className="no-margin">Lviv, Ukraine</p>
              </div>
              <div data-w-id="Div Block" className="project-overlay">
                <div className="project-info-wrapper">
                  <div className="project-overline small-caps-text">2018</div>
                  <h4 className="project-name">Cascade Height Flats</h4>
                </div>
                <div className="view-project">View Project</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="footer wf-section">
        <div className="container">
          <div className="inner-footer">
            <div className="inner-footer-top">
              <a href="/" className="left-block-top logo w-inline-block">
                <img
                  src="https://assets.website-files.com/60228ac4ff92bcfde58d2cdc/602940dfbd9e72c79a310c88_arc_logo.png"
                  loading="lazy"
                  alt="Arc Studio logo"
                />
              </a>
              <div className="middle-block-one">
                <a href="/studio" className="footer-link-block w-inline-block">
                  <div className="footer-menu">Studio</div>
                </a>
                <a
                  href="/projects"
                  aria-current="page"
                  className="footer-link-block w-inline-block w--current"
                >
                  <div className="footer-menu">Projects</div>
                </a>
                <a href="/blog" className="footer-link-block w-inline-block">
                  <div className="footer-menu">Blog</div>
                </a>
                <a
                  href="/contact"
                  className="footer-link-block last w-inline-block"
                >
                  <div className="footer-menu">Contact</div>
                </a>
              </div>
              <div className="right-block">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  className="footer-social-link w-inline-block"
                >
                  <img
                    src="https://assets.website-files.com/60228ac4ff92bcfde58d2cdc/6026662e5444ec6d59b239c4_Fb.png"
                    loading="lazy"
                    alt="

"
                  />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  className="footer-social-link last w-inline-block"
                >
                  <img
                    src="https://assets.website-files.com/60228ac4ff92bcfde58d2cdc/6026662e43ad45a490e1d1dd_Ig.png"
                    loading="lazy"
                    alt="Instagram logo"
                  />
                </a>
              </div>
            </div>
            <div className="inner-footer-btm">
              <div className="left-block">
                <div className="fade-footer copyright">
                  © Copyright • Powered by
                  <a
                    href="https://webflow.com/"
                    target="_blank"
                    className="footer-link link"
                  >
                    Webflow
                  </a>
                </div>
              </div>
              <div className="middle-block-two">
                <a
                  href="/template-pages/styleguide"
                  className="useful-links small-link"
                >
                  Style Guide
                </a>
                <a
                  href="/template-pages/license"
                  className="useful-links small-link"
                >
                  Licenses
                </a>
              </div>
              <div className="right-block">
                <div className="fade-footer designer">
                  Designed by
                  <a
                    href="https://www.obencci.com"
                    className="footer-link link"
                  >
                    Obencci
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-w-id="98912a70-c688-1fa3-4b88-b1e973800bb2"
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
            data-w-id="98912a70-c688-1fa3-4b88-b1e973800bb6"
            className="close"
          >
            <div className="close-bar top" />
            <div className="close-bar bottom" />
          </div>
        </div>
        <div className="mobile-menu-wrapper">
          <div className="mobile-menu-inner">
            <div className="mobile-menu-links">
              <a href="/studio" className="mbile-menu-link w-inline-block">
                <h3 className="mobile-menu-text">Studio</h3>
              </a>
              <a
                href="/projects"
                aria-current="page"
                className="mbile-menu-link w-inline-block w--current"
              >
                <h3 className="mobile-menu-text">Projects</h3>
              </a>
              <a href="/blog" className="mbile-menu-link w-inline-block">
                <h3 className="mobile-menu-text">Blog</h3>
              </a>
            </div>
            <a href="/contact" className="main-button w-button">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

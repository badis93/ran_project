import React from "react";

const Studio = () => {
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
                <a
                  href="/studio"
                  aria-current="page"
                  className="navbar-menu-item-link dark w--current"
                >
                  Studio
                </a>
              </li>
              <li className="navbar-menu-item">
                <a href="/projects" className="navbar-menu-item-link dark">
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
      <div className="hero studio wf-section" />
      <div className="section wf-section">
        <div className="container">
          <div className="grid-halves studio-header">
            <div>
              <div className="overline-header small-caps-text">About us</div>
              <h2 className="side-header">We are a family</h2>
            </div>
            <div>
              <p className="blurb-summary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                justo ligula, pulvinar vel risus vitae, fermentum malesuada
                magna. Vivamus vel massa a ante commodo accumsan vitae et nunc.
                Vestibulum vel rutrum arcu. Sed ut commodo nisi. Integer sodales
                in velit at imperdiet.
                <br />
                Nullam lacinia nisl eget urna fringilla accumsan. <br />
                <br />
                Pellentesque augue quam, porttitor ac mauris ut, sollicitudin
                laoreet massa. Nunc venenatis metus quis sapien mollis, ac
                molestie mauris ultricies. Maecenas id porta justo. Praesent
                vulputate porttitor mi non tincidunt.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section wf-section">
        <div className="container">
          <figure className="team-members">
            <figure className="team-member first">
              <div className="team-member-photo">
                <img
                  src="https://assets.website-files.com/60228ac4ff92bcfde58d2cdc/602917693653236d35ea274d_pexels-alex-green-6625697.jpg"
                  loading="lazy"
                  alt="Man drinking tea"
                />
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">Brandon Hicks</h3>
                <div className="team-member-role">Senior Architect</div>
                <p className="team-member-blurb">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus.
                </p>
              </div>
            </figure>
            <figure className="team-member vertical left">
              <div className="team-member-photo margin-btm">
                <img
                  src="https://assets.website-files.com/60228ac4ff92bcfde58d2cdc/6029176a6e51f583c28e4e59_pexels-alex-green-6625712.jpg"
                  loading="lazy"
                  alt="Woman drinking tea"
                />
              </div>
              <div className="team-member-info no-margin">
                <h3 className="team-member-name">Ania Hicks</h3>
                <div className="team-member-role">Senior Architect</div>
                <p className="team-member-blurb">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi viverra ornare.
                </p>
              </div>
            </figure>
            <figure className="team-member vertical right">
              <div className="team-member-photo margin-btm">
                <img
                  src="https://assets.website-files.com/60228ac4ff92bcfde58d2cdc/6029176abd9e72000d30742a_pexels-andrea-piacquadio-3979228.jpg"
                  loading="lazy"
                  sizes="(max-width: 767px) 290px, (max-width: 991px) 260px, 350px"
                  srcSet="
              https://assets.website-files.com/60228ac4ff92bcfde58d2cdc/6029176abd9e72000d30742a_pexels-andrea-piacquadio-3979228-p-500.jpeg 500w,
              https://assets.website-files.com/60228ac4ff92bcfde58d2cdc/6029176abd9e72000d30742a_pexels-andrea-piacquadio-3979228.jpg        640w
            "
                  alt="Girl drinking tea"
                />
              </div>
              <div className="team-member-info no-margin">
                <h3 className="team-member-name">Joanna Hicks</h3>
                <div className="team-member-role">Senior Architect</div>
                <p className="team-member-blurb">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </figure>
          </figure>
        </div>
      </div>
      <div className="section secondary-background wf-section">
        <div className="container">
          <div className="grid-halves">
            <div>
              <div className="overline-header small-caps-text">Our Mission</div>
              <h2 className="side-header">What drives us</h2>
            </div>
            <div>
              <p className="blurb-summary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                justo ligula, pulvinar vel risus vitae, fermentum malesuada
                magna. Vivamus vel massa a ante commodo accumsan vitae et nunc.
                Vestibulum vel rutrum arcu. Sed ut commodo nisi. Integer sodales
                in velit at imperdiet.
                <br />
                Nullam lacinia nisl eget urna fringilla accumsan. <br />
                <br />
                Pellentesque augue quam, porttitor ac mauris ut, sollicitudin
                laoreet massa. Nunc venenatis metus quis sapien mollis, ac
                molestie mauris ultricies. Maecenas id porta justo. Praesent
                vulputate porttitor mi non tincidunt. Ut et ante auctor purus
                elementum efficitur. Sed sollicitudin nulla a vulputate semper.
                Praesent id quam at quam venenatis placerat sit amet nec mi.
                Cras iaculis mollis scelerisque. Nulla dolor dolor, accumsan ut
                lobortis at, semper eu dui.&nbsp;
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section wf-section">
        <div className="container">
          <div className="large-cta">
            <h3 className="cta-header">Have a project in mind?</h3>
            <a href="/contact" className="main-button w-button">
              Let's Talk About It
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
                <a
                  href="/studio"
                  aria-current="page"
                  className="footer-link-block w-inline-block w--current"
                >
                  <div className="footer-menu">Studio</div>
                </a>
                <a
                  href="/projects"
                  className="footer-link-block w-inline-block"
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
              <a
                href="/studio"
                aria-current="page"
                className="mbile-menu-link w-inline-block w--current"
              >
                <h3 className="mobile-menu-text">Studio</h3>
              </a>
              <a href="/projects" className="mbile-menu-link w-inline-block">
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

export default Studio;

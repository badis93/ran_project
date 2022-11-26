import React from "react";

const Contact = () => {
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
                <a
                  href="/contact"
                  aria-current="page"
                  className="navbar-menu-item-link dark w--current"
                >
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
      <div className="section secondary-background wf-section">
        <div className="container">
          <div className="hero-row">
            <div className="intro-content">
              <h1 className="hero-title display-heading-one">
                Speak to us today
                <br />
              </h1>
              <p className="hero-text large-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua uiteb
                butip.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section wf-section">
        <div data-w-id="Div Block" className="container">
          <div className="w-layout-grid grid-halves">
            <div
              id="w-node-_939ab917-117e-a212-33b0-0abd6510f362-dcd40a16"
              className="side-content"
            >
              <div className="side-content-wrapper">
                <h2 className="section-title">We are here</h2>
                <p className="side-conent-blurb">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  uit varius enim in eros elementum tristique.
                </p>
              </div>
              <div className="contact-info">
                <div>Address</div>
                <div className="muted">
                  19999 Address Boulevard Ave.
                  <br />
                  Houston, TX, 92002
                </div>
                <div>Phone</div>
                <div className="muted">123-123-1234</div>
                <div>Email</div>
                <div className="muted">info@arcstudio.com</div>
              </div>
            </div>
            <div id="w-node-div-block-2-dcd40a16" className="form-wrapper">
              <div className="form-block w-form">
                <form
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  method="get"
                  className="form"
                >
                  <label
                    htmlFor="name"
                    className="overline-header small-caps-text"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="text-field w-input"
                    maxLength={256}
                    name="name"
                    data-name="Name"
                    placeholder="e.g. John Hicks"
                    id="name"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="overline-header small-caps-text"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="text-field w-input"
                    maxLength={256}
                    name="email"
                    data-name="Email"
                    placeholder="e.g. info@arcstudio.com"
                    id="email"
                    required
                  />
                  <label
                    htmlFor="Phone-2"
                    className="overline-header small-caps-text"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="text-field w-input"
                    maxLength={256}
                    name="Phone"
                    data-name="Phone"
                    placeholder="e.g. 123-123-1234"
                    id="phone"
                    required
                  />
                  <label
                    htmlFor="Message-2"
                    className="overline-header small-caps-text"
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="Let us know about your project"
                    maxLength={5000}
                    id="message"
                    name="Message"
                    data-name="Message"
                    className="text-field _w-input w-input"
                    defaultValue={""}
                  />
                  <input
                    type="submit"
                    defaultValue="Submit"
                    data-wait="Please wait..."
                    className="main-button w-button"
                  />
                </form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
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
                  className="footer-link-block w-inline-block"
                >
                  <div className="footer-menu">Projects</div>
                </a>
                <a href="/blog" className="footer-link-block w-inline-block">
                  <div className="footer-menu">Blog</div>
                </a>
                <a
                  href="/contact"
                  aria-current="page"
                  className="footer-link-block last w-inline-block w--current"
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
              <a href="/projects" className="mbile-menu-link w-inline-block">
                <h3 className="mobile-menu-text">Projects</h3>
              </a>
              <a href="/blog" className="mbile-menu-link w-inline-block">
                <h3 className="mobile-menu-text">Blog</h3>
              </a>
            </div>
            <a
              href="/contact"
              aria-current="page"
              className="main-button w-button w--current"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

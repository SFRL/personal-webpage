import React from "react";
import { Link } from "gatsby";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// library.add(fas);

const Layout = (props) => {
  const { title, children } = props;
  const [toggleNav, setToggleNav] = React.useState(false);
  return (
    <div
      className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}
      id="menu"
    >
      <header className="site-head">
        <div className="site-head-container">
          <button
            className="nav-burger"
            // to={`/#menu`}
            onClick={() => setToggleNav(!toggleNav)}
            // state={{ typedCompleted: true }}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>{" "}
              <div className="hamburger-text-menu-text hidden">Menu</div>
            </div>
          </button>
          <nav id="swup" className="site-head-left">
            <div className="social-links">
              <Link to={`/`} state={{ typedCompleted: true }}>
                Home
              </Link>

              <Link to={`/about`}>About</Link>
            </div>
          </nav>
          <div className="site-head-center">
            <Link
              to={`/`}
              className="site-head-logo"
              state={{ typedCompleted: true }}
            >
              {title}
            </Link>
          </div>

          <div className="site-head-right ">
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/sebastianlobbers/"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://twitter.com/9SFRL2"
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://soundcloud.com/sebastian-l-bbers"
                title="soundcloud"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faSoundcloud} />
              </a>

              <a
                href="https://github.com/SFRL"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade content-wrapper">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} {title.split(" |")[0]} &mdash; Built
        with{" "}
        <a
          href="https://gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>{" "}
        based on{" "}
        <a
          href="https://github.com/weensykim/gatsby-london-after-midnight"
          target="_blank"
          rel="noopener noreferrer"
        >
          London after Midnight
        </a>
      </footer>
    </div>
  );
};

export default Layout;

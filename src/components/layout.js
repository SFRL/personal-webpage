import React from "react";
import {graphql, useStaticQuery, Link } from "gatsby";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faSoundcloud,
} from "@fortawesome/free-brands-svg-icons";
import Typing from "../components/typing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const navItems = [
  {
    name: "Research",
    link: "/research",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Music",
    link: "/music",
  },
  {
    name: "About",
    link: "/about",
  }
];

const socialItems = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sebastianlobbers/",
    icon: faLinkedin,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/9SFRL2",
    icon: faTwitter,
  },
  {
    name: "Github",
    link: "https://github.com/SFRL",
    icon: faGithub,
  },
  {
    name: "Soundcloud",
    link: "https://soundcloud.com/sebastian-l-bbers",
    icon: faSoundcloud,
  },
];

const Layout = (props) => {
  const data = useStaticQuery(indexQuery);
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
            onClick={() => setToggleNav(!toggleNav)}
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
              {navItems.map((item) => (
                item.name !== title ? (
                <Link key={item.name} to={item.link} state={{ typedCompleted: true }}>
                  {item.name}
                </Link> ) : undefined
              ))}
            </div>
          </nav>
          <div className="site-head-center">
            <Link
              to={`/`}
              className="site-head-logo"
              state={{ typedCompleted: true }}
            >
              {data.site.siteMetadata.title}
            </Link>
            {title ? (
              <span className="site-head-logo">
                <Typing words={[title]}/>
              </span>
            ) : undefined}
          </div>

          <div className="site-head-right ">
            <div className="social-links">
              {socialItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  title={item.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={item.icon} />
                </a>
              ))}
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

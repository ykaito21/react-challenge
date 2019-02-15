import React from "react";

function Header(props) {
  const menuBtnStyle = props.showMenu ? "menu-btn close" : "menu-btn";
  const menuStyle = props.showMenu ? "menu show" : "menu";
  const menuNavStyle = props.showMenu ? "menu-nav show" : "menu-nav";
  const menuBrandingStyle = props.showMenu
    ? "menu-branding show"
    : "menu-branding";
  const navItemStyle = props.showMenu ? "nav-item show" : "nav-item";

  return (
    <header>
      <div className={menuBtnStyle} onClick={props.handleMenu}>
        <div className="btn-line" />
        <div className="btn-line" />
        <div className="btn-line" />
      </div>

      <div className={menuStyle}>
        <div className={menuBrandingStyle}>
          <div className="portrait" />
        </div>
        <ul className={menuNavStyle}>
          <li className={navItemStyle}>
            <a href="index.html" className="nav-link">
              Home
            </a>
          </li>
          <li className={navItemStyle}>
            <a href="about.html" className="nav-link">
              About Me
            </a>
          </li>
          <li className={navItemStyle}>
            <a href="work.html" className="nav-link">
              My Work
            </a>
          </li>
          <li className={navItemStyle}>
            <a href="contact.html" className="nav-link">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

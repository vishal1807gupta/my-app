import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"

export default function Navbar(props) {
 
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className={`navbar-brand ${props.newText}`} to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link active ${props.newText}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${props.newText}`} to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-secondary" type="submit">
              Search
            </button>
          </form> */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              style={{backgroundColor:'#042743'}}
              id="flexSwitchCheckDefault"
              onClick = {props.toggleMode}
            />
            <label className={`form-check-label ${props.newText}`} htmlFor="flexSwitchCheckDefault" >Enable color Mode
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              style={{backgroundColor:'rgb(207, 248, 25)'}}
              id="flexSwitchCheckDefault1"
              onClick = {props.toggleMode2}
            />
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              style={{backgroundColor:'rgb(225, 50, 231)'}}
              id="flexSwitchCheckDefault2"
              onClick = {props.toggleMode3}
            />
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              style={{backgroundColor:'rgb(233, 14, 14)'}}
              id="flexSwitchCheckDefault3"
              onClick = {props.toggleMode4}
            />
          </div>
        </div>
        </div>
    </nav>
  );
}

// Navbar.propTypes = {
//     title: PropTypes.string,
//     aboutText: PropTypes.string
// }

Navbar.propTypes = {
  title:
    PropTypes.string
      .isRequired /*if isRequired is used and no default prop is set then it will throw error */,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};

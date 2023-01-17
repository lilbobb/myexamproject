import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/" className="pages">
              Custom counter
            </Link>
          </li>
          <li>
            <Link to="/MyReducer" className="pages">
              Reducer Counter
            </Link>
          </li>
          <li>
            <Link to="/TestError" className="pages">
              Test Error Page
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

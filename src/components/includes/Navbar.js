import React from "react";
import {Link} from 'react-router-dom'
function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="/">Home</a>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link className="nav-link active" to="/">View Cars</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link active" to="/createCar">Create Car</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/manageCars">Manage Car</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    )
}

export default Navbar;
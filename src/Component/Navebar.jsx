import React from "react";
import { Link } from "react-router-dom";
import '../ComponentStyle/Navbar.css'

export default function Navebar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-bg-transparent">
        <div className="container-fluid">
          <Link className="navbar-brand fs-3 fw-bolder " to="Home">
            Noxe
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
              {props.userData ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="Home"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="Movies">
                      Movies
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="TvShow">
                      Tv-Show
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="About">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="Network">
                      Network
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>

            <ul className="navbar-nav me mb-2 mb-lg-0">
              <li className="nav-item  d-flex align-items-center">
                
                  <a href="https://www.facebook.com/Routelearning/" ><i className="fab mx-2 fa-facebook"> </i> </a>
                  <a href="https://www.facebook.com/Routelearning/" ><i className="fab mx-2 fa-twitter"  ></i>  </a>
                  <a href="https://www.facebook.com/Routelearning/" ><i className="fab mx-2 fa-instagram"></i>  </a>
                  <a href="https://www.facebook.com/Routelearning/" > <i className="fab mx-2 fa-spotify"  ></i> </a>
               
  
    
              </li>
              {props.userData ? (
                <>
                  <li className="nav-item">
                    <span className="nav-link logOut " onClick={()=>{props.logOut()}} >Log-Out</span>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="Login">
                      Log-In
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="Register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

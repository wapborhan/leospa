import React from "react";
import Logo from "../assets/images/logo.png";
import LeftImg from "../assets/images/leaf.png";
import RightImg from "../assets/images/spa2.png";

const Header = () => {
  return (
    <header>
      <section id="header">
        <div className="container">
          <nav className="navbar navbar-expand-lg main-menu ">
            <div className="nav-brand logo">
              <img src={Logo} alt="" />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <i className="fas fa-bars"></i>
              </span>
            </button>

            <div
              className="menu justify-content-end collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav menu-iteam">
                <li>
                  <a className="active" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Feature</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="head-comtent">
            <h5>SPA & BEAUTY CENTER</h5>
            <h2>Beauty and success starts here.</h2>
            <p>
              Together creeping heaven upon third dominion be upon won't
              darkness rule behold it created good saw after she'd Our set
              living.
            </p>
            <a className="head-btn" href="#">
              Reserve Now
            </a>
            {/* <!-- Button trigger modal --> */}
            <a
              type="button"
              className="btn btn-primary watch-btn video-btn"
              data-toggle="modal"
              data-src="https://www.youtube.com/embed/uMMH3wF2zXo"
              data-target=".bd-example-modal-lg"
            >
              <i className="far fa-play-circle"></i>{" "}
              <span>Watch Your Story</span>
            </a>
            {/* <!-- Modal --> */}
            <div
              className="modal fade bd-example-modal-lg"
              id="video_pop"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myLargeModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    {/* <!-- 16:9 aspect ratio --> */}
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        className="embed-responsive-item"
                        src=""
                        id="video"
                        allowscriptaccess="always"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Modal --> */}
          </div>
        </div>
        <div className="left-img">
          <img src={LeftImg} alt="" />
        </div>
        <div className="right-img">
          <img src={RightImg} alt="" />
        </div>
      </section>
    </header>
  );
};

export default Header;

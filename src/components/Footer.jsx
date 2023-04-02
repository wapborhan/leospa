import React from "react";
import FootLogo from "../assets/images/logo.png";

const Footer = () => {
  const d = new Date();
  return (
    <section id="footer">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12">
            <div className="foot-logo antm">
              <img src={FootLogo} alt="" />
            </div>
            <div className="foot-menu">
              <ul>
                <li>
                  <a href="#">Home</a>
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
            <div className="foot-social">
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-vimeo-v"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 desigh-by">
            <h3 className="wow bounceInLeft text-center">
              Copyright © {d.getFullYear()} LeoSpa | Designed BY{" "}
              <a className="linksl kukuri" href="http://www.srdreamlab.com/">
                <i className="fas fa-heart"></i>
                SR Dream Lab
                <i className="fas fa-heart"></i>
              </a>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

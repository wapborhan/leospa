import React from "react";
import Team1 from "../assets/images/team/1.jpg";
import Team2 from "../assets/images/team/2.jpg";
import Team3 from "../assets/images/team/3.jpg";

const Team = () => {
  return (
    <section id="team">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12 team-head">
            <h2>Experienced Team</h2>
            <p>
              To doesn't his appear replenish together called he of mad place
              won't wherein blessed second every wherein were meat kind wherein
              and martcin{" "}
            </p>
          </div>
        </div>
        <div className="row text-center team-main">
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="team-iteam">
              <div className="team-iteam-img">
                <img src={Team1} alt="" />
              </div>
              <div className="team-iteam-content">
                <h2>Joseph Austin</h2>
                <h5>Thai Message</h5>
                <div className="team-iteam-social">
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
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="team-iteam">
              <div className="team-iteam-img">
                <img src={Team2} alt="" />
              </div>
              <div className="team-iteam-content">
                <h2>Joseph Austin</h2>
                <h5>Thai Message</h5>
                <div className="team-iteam-social">
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
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="team-iteam">
              <div className="team-iteam-img">
                <img src={Team3} alt="" />
              </div>
              <div className="team-iteam-content">
                <h2>Joseph Austin</h2>
                <h5>Thai Message</h5>
                <div className="team-iteam-social">
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
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

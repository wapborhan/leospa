import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//
import ButterFly from "../assets/images/butterfly.png";
import icon from "../assets/images/icon.png";
import jasmine from "../assets/images/jasmine.png";
import chinaRose from "../assets/images/china-rose.png";
import Ser1 from "../assets/images/services/1.jpg";
import Ser2 from "../assets/images/services/2.jpg";
import Ser3 from "../assets/images/services/3.jpg";
import Ser4 from "../assets/images/services/4.jpg";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
  };
  return (
    <section id="about">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12 about-head">
            <img src={ButterFly} alt="" />
            <h3>About our spa center</h3>
            <h2>Come and you will be Inspired!</h2>
            <p>
              It’s the end of summer the sweltering heat makes human sweat in
              the night and makes the plants and trees wilt even in the moonlit
              nights. The eastern wind breeze brings an eerie feeling, that the
              monsoon clouds are soon coming, there is a strange silence in the
              ears, the sky gets darker and darker The rain starts coming down,
              slowly at first, but heavy little later, the gutters and drainages
              suddenly fill up, and water starts flowing down the streets.
            </p>
            <a className="btn" href="#">
              Read More
            </a>
            <div className="left-flw-jes">
              <img src={jasmine} alt="" />
            </div>
            <div className="right-flw-ros">
              <img src={chinaRose} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-100">
        <Slider
          className="main-about-image owl-carousel owl-theme"
          {...settings}
        >
          <div className="item about-img">
            <div className="about-img-iteam">
              <img src={Ser1} alt="" />
            </div>

            <div className="about-overley">
              <div className="overly-content">
                <img src={icon} alt="" />
                <h2>Body Treatment</h2>
              </div>
            </div>
          </div>
          <div className="item about-img">
            <div className="about-img-iteam">
              <img src={Ser2} alt="" />
            </div>
            <div className="about-overley">
              <div className="overly-content">
                <img src={icon} alt="" />
                <h2>Body Treatment</h2>
              </div>
            </div>
          </div>
          <div className="item about-img">
            <div className="about-img-iteam">
              <img src={Ser3} alt="" />
            </div>
            <div className="about-overley">
              <div className="overly-content">
                <img src={icon} alt="" />
                <h2>Body Treatment</h2>
              </div>
            </div>
          </div>
          <div className="item about-img">
            <div className="about-img-iteam">
              <img src={Ser4} alt="" />
            </div>
            <div className="about-overley">
              <div className="overly-content">
                <img src={icon} alt="" />
                <h2>Body Treatment</h2>
              </div>
            </div>
          </div>{" "}
        </Slider>
      </div>
    </section>
  );
};

export default About;

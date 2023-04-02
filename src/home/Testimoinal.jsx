import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import quote from "../assets/images/quote.png";
import client from "../assets/images/client-1.png";

const Testimoinal = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <section id="testimoinal">
      <div className="container">
        <div className="testi-slider">
          <div className="slick-carousel">
            <Slider className="slick-carousel" {...settings}>
              <div className="slide-content text-center">
                <div className="testi-slide-img">
                  <img src={quote} alt="" />
                </div>
                <div className="texti-slide-content">
                  <p>
                    First i beast be fruitful open you tree all Won't can't
                    likeness and you're have whales creature seed to two grass
                    life blessed you meat shall you winged under from their
                    there he That you're one called gather make much red wherein
                    set fourth green bearing fifth replenish given she had.
                  </p>
                </div>
                <div className="texti-slide-content-user">
                  <img src={client} alt="" />
                  <h2>
                    Jack Marsh, <span>Executive</span>
                  </h2>
                </div>
              </div>

              <div className="slide-content text-center">
                <div className="testi-slide-img">
                  <img src={quote} alt="" />
                </div>
                <div className="texti-slide-content">
                  <p>
                    First i beast be fruitful open you tree all Won't can't
                    likeness and you're have whales creature seed to two grass
                    life blessed you meat shall you winged under from their
                    there he That you're one called gather make much red wherein
                    set fourth green bearing fifth replenish given she had.
                  </p>
                </div>
                <div className="texti-slide-content-user">
                  <img src={client} alt="" />
                  <h2>
                    Jack Marsh, <span>Executive</span>
                  </h2>
                </div>
              </div>

              <div className="slide-content text-center">
                <div className="testi-slide-img">
                  <img src={quote} alt="" />
                </div>
                <div className="texti-slide-content">
                  <p>
                    First i beast be fruitful open you tree all Won't can't
                    likeness and you're have whales creature seed to two grass
                    life blessed you meat shall you winged under from their
                    there he That you're one called gather make much red wherein
                    set fourth green bearing fifth replenish given she had.
                  </p>
                </div>
                <div className="texti-slide-content-user">
                  <img src={client} alt="" />
                  <h2>
                    Jack Marsh, <span>Executive</span>
                  </h2>
                </div>
              </div>

              <div className="slide-content text-center">
                <div className="testi-slide-img">
                  <img src={quote} alt="" />
                </div>
                <div className="texti-slide-content">
                  <p>
                    First i beast be fruitful open you tree all Won't can't
                    likeness and you're have whales creature seed to two grass
                    life blessed you meat shall you winged under from their
                    there he That you're one called gather make much red wherein
                    set fourth green bearing fifth replenish given she had.
                  </p>
                </div>
                <div className="texti-slide-content-user">
                  <img src={client} alt="" />
                  <h2>
                    Jack Marsh, <span>Executive</span>
                  </h2>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimoinal;

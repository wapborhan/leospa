import React from "react";
import Prodeures1 from "../assets/images/post/1.jpg";
import Prodeures2 from "../assets/images/post/2.jpg";
import Prodeures3 from "../assets/images/post/3.jpg";

const Procedures = () => {
  return (
    <section id="Procedures">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12 proced-head">
            <h2>Popular Procedures</h2>
            <p>
              To doesn't his appear replenish together called he of mad place
              won't wherein blessed second every wherein were meat kind wherein
              and martcin{" "}
            </p>
          </div>
        </div>
        <div className="row proced-main text-center justify-content-center">
          <div className="col-lg-4 col-md-4 col-sm-6 proced-brd">
            <div className="proced-iteam">
              <div className="proced-iteam-img">
                <img src={Prodeures1} alt="" />
              </div>
              <div className="proced-content">
                <h2>Messages Therapy</h2>
                <p>
                  Living winged said you darkness you're divide gathered and
                  bring one seasons face great dr Waters firmament place which.
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6 proced-brd">
            <div className="proced-iteam">
              <div className="proced-iteam-img">
                <img src={Prodeures2} alt="" />
              </div>
              <div className="proced-content">
                <h2>Messages Therapy</h2>
                <p>
                  Living winged said you darkness you're divide gathered and
                  bring one seasons face great dr Waters firmament place which.
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6 proced-brd">
            <div className="proced-iteam">
              <div className="proced-iteam-img">
                <img src={Prodeures3} alt="" />
              </div>
              <div className="proced-content">
                <h2>Messages Therapy</h2>
                <p>
                  Living winged said you darkness you're divide gathered and
                  bring one seasons face great dr Waters firmament place which.
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Procedures;

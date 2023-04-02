import React from "react";
import Ico1 from "../assets/images/cont-left-1.png";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12 contact-head">
            <h2>Get in Touch</h2>
            <p>
              To doesn't his appear replenish together called he of mad place
              won't wherein blessed second every wherein were meat kind wherein
              and martcin
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="contact-left ">
              <div className="contact-left-iteam">
                <div className="icon">
                  <img src={Ico1} alt="" />
                </div>
                <div className="text">
                  848 E 28th ST, BROOKLYN <br />
                  <span>NEW YORK, USa</span>
                </div>
              </div>
              <div className="contact-left-iteam">
                <div className="icon">
                  <img src={Ico1} alt="" />
                </div>
                <div className="text">
                  example@leospa.com <br />
                  <span>example@leospa.com</span>
                </div>
              </div>
              <div className="contact-left-iteam">
                <div className="icon">
                  <img src={Ico1} alt="" />
                </div>
                <div className="text">
                  +02 365 2365 3265 (02) <br />
                  <span>+01 365 2365 3265 (04)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-6">
            <div className="foot-contact-form">
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="FRIST NAME"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="MAIL ADRESS"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="WRITE COMMENT"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

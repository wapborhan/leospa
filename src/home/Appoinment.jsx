import React from "react";
import Appoin from "../assets/images/appointment-img.jpg";

const Appoinment = () => {
  return (
    <section id="appoinment">
      <div className="row appoinment-main">
        <div className="col-lg-5 appoinment-iteam">
          <div className="appoinment-img">
            <img src={Appoin} alt="" />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="appoinment-form">
            <form action="#">
              <div className="appoinment-form-box">
                <input
                  type="text"
                  placeholder="NAME"
                  name="name"
                  required=""
                  id="name"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  required=""
                  id="email"
                />
              </div>
              <div className="appoinment-form-box">
                <div className="select-field">
                  <select id="service" name="service">
                    <option value="">Select service</option>
                    <option value="normal">Normal Service</option>
                    <option value="vip">VIP Serevice</option>
                  </select>
                </div>
                <input
                  type="tel"
                  placeholder="Phone numer"
                  name="number"
                  id="number"
                />
              </div>
              <div className="appoinment-form-box">
                <input type="date" placeholder="date" name="date" id="date" />
                <input type="time" placeholder="time" name="time" id="time" />
              </div>
              <div className="appoinment-form-box">
                <textarea
                  name="notes"
                  placeholder="Your notes"
                  id="comments"
                ></textarea>
              </div>
              <button className="btn btn-round" id="asubmit">
                Make an Appointment
              </button>
              <div id="amessage"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appoinment;

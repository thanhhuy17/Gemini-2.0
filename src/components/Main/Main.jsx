// import React from "react";
import { useState } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
const Main = () => {
  const[extended, setExtended] = useState(false)
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="image" />
      </div>

      <div className="main__container">
        <div className="greet">
          <p className="greet__gradient">
            <span>Hello, Dev.</span>
          </p>
          <p className="greet__subtitle">How can I Help you today?</p>
        </div>

        <div className="cards">
          <div className="card">
            <p>Suggest Beautiful places to see on a upcomming road trip</p>
            <img src={assets.compass_icon} alt="image" />
          </div>

          <div className="card">
            <p>Briefly sumarzine this concept: urban planning</p>
            <img src={assets.bulb_icon} alt="image" />
          </div>

          <div className="card">
            <p>Brainstorm team bonding activities for out work retreat</p>
            <img src={assets.message_icon} alt="image" />
          </div>

          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="image" />
          </div>

          <div className="main__bottom">
            <div className="search__box">
              <input type="text" placeholder="Enter a prompt here" />
              <div className="search__box-icon">
                <img className="search__img-icon" src={assets.gallery_icon} alt="" />
                <img className="search__img-icon" src={assets.mic_icon} alt="" />
                {extended?<img className="search__img-icon" src={assets.send_icon} alt="" />:null}
              </div>
            </div>
            <div className="main__botton-descrip">
              <p>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

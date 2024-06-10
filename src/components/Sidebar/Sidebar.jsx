// import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          src={assets.menu_icon}
          alt="image"
          onClick={() => setExtended((prev) => !prev)}
        />

        <div className="new__chat">
          <img src={assets.plus_icon} alt="image" />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recent__title">Recent</p>
            <div className="recent__entry">
              <img src={assets.message_icon} alt="image" />
              <p>What is React...</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom__item recent__entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>

        <div className="bottom__item recent__entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>

        <div className="bottom__item recent__entry">
          <img src={assets.send_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

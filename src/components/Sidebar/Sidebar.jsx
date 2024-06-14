// import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSend, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSend(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt="image"
        />

        <div onClick={() => newChat()} className="new__chat">
          <img src={assets.plus_icon} alt="image" />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recent__title">Recent</p>
            {/* Kiểm tra xem prevPrompts có tồn tại và có chiều dài lớn hơn 0 */}
            {prevPrompt &&
              prevPrompt.length > 0 &&
              prevPrompt.map((item, index) => {
                return (
                  // console.log("huy: " + item)
                  <div
                    onClick={() => loadPrompt(item)}
                    className="recent__entry"
                    key={index}
                  >
                    <img src={assets.message_icon} alt="Recent Prompt Icon" />
                    <p>{item} ...</p>
                  </div>
                );
              })}
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

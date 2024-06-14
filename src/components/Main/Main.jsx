// import React from "react";
import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";
// import Sidebar from "../../components/Sidebar/Sidebar"; 

const Main = () => {
  const {
    onSend,
    recentPrompt, // Biến lưu trữ danh sách các prompt đã nhập
    showResult,
    loading,
    resultData,
    setInput,
    input,
    setRecentPrompt // Hàm cập nhật prevPrompt
  } = useContext(Context);

  // const [extended, setExtended] = useState(false);
  const [inputText, setInputText] = useState("");

  // Xử lý sự kiện khi người dùng nhập vào input và nhấn Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // Cập nhật prevPrompt trong Context
      setRecentPrompt([...recentPrompt, inputText]);
      setInputText(""); // Xóa nội dung input
      setInput(inputText); // Cập nhật input trong Context
    }
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="image" />
      </div>

      <div className="main__container">
        {!showResult ? (
          <>
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
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result__title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p> {/* Hiển thị recentPrompt */}
            </div>

            <div className="result__data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main__bottom">
          <div className="search__box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
              onKeyDown={handleKeyDown}
            />
            <div className="search__box-icon">
              <img className="search__img-icon" src={assets.gallery_icon} alt="" />
              <img className="search__img-icon" src={assets.mic_icon} alt="" />
              {input ? (
                <img
                  onClick={() => onSend()}
                  className="search__img-icon"
                  src={assets.send_icon}
                  alt=""
                />
              ) : null}
            </div>
          </div>
          <div className="main__botton-descrip">
            <p>
              Gemini may display inaccurate info, including about people, so
              double-check its responses. Your privacy and Gemini Apps
            </p>
          </div>
        </div>
        {/* <Sidebar prevPrompt={recentPrompt} /> */}
         {/* Truyền prevPrompt vào Sidebar */}
      </div>
    </div>
  );
};

export default Main;
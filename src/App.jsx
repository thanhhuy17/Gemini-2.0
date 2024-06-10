// import React from "react";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
const App = () => {
  // return <>{
  //   <Sidebar/>
  //   <Main/>
  // }</>;

  return (
    <div className="appH">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;

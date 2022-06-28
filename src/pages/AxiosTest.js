import React from "react";
import axios from "axios";

const AxiosTest = () => {
  const handleClick = () => {
    axios.get("https://www.naver.com/").then((response) => {
      console.log(response);
    });
  };
  return (
    <div>
      <button onClick={handleClick}>요청</button>
    </div>
  );
};

export default AxiosTest;
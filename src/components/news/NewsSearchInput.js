import React, {useState} from "react";

const NewsSearchInput = ({ handleClick, handleChange }) => {
  const [contents, setContents] = useState("뉴스 콘텐츠");
  
  
  
  return (
    <div>
      <input onChange={handleChange}></input>


      <button onClick={handleClick}>검색</button>
    </div>
  );
};

export default NewsSearchInput;
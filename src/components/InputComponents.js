import React, { useState } from "react";
//#rafce

const InputComponents = () => {
  //   let contents = "초기 콘텐츠 입니다.";
  const [contents, setContents] = useState("초기 콘텐츠입니다.");

  const handleChange = (event) => {
    const { value } = event.target;
    setContents(value);
  };

  const handleClick = () => {
    alert(contents);
  };

  return (
    <div>
      <p>{contents}</p>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>전송</button>
    </div>
  );
};

export default InputComponents;
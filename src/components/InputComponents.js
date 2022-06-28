import React, {useState} from 'react'

// #rafce 불러오기

const InputComponents = () => {
  //  let contents = "초기 콘텐츠";
  const [contents, setContents] = useState("초기 콘텐츠");

    const handleChange = (event) => {
        const {value} = event.target;
        setContents(value);
    };

  return ( 
    <div>
        <p> {contents} </p>
        <input onChange={handleChange}></input>
    </div>
  );
};

export default InputComponents

import React, { useState } from "react";
import TopBar from "../components/common/TopBar";
import NewsSearchInput from "../components/news/NewsSearchInput";
import NewsSearchResult from "../components/news/NewsSearchResult";


const NewsApiPage = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    const {value} = event.target;
    setSearchInput(value);
  };

  const handleClick =() =>{
    console.log(searchInput);
    // 1. axios news api 요청 전달
    // 2. state 생성 뉴스 API로 부터 받은 결과 값
    // 3. state 요청으로 받은 응답 할당
    // 4. NewsSearchResult 컴포넌트 데이터 전달
  };

  return (
    <div>
      <TopBar title={"뉴스 검색기"}></TopBar>
      <NewsSearchInput>
        handleChange={handleChange}
        handleClick={handleClick}
      </NewsSearchInput>
      <NewsSearchResult></NewsSearchResult>
    </div>
  );
};

export default NewsApiPage;
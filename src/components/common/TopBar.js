import React from 'react';
import style from "styled-components";

const TopBarBlock = style.div`
    height : 50px;
    font-size: 30px;
    font-weight : bold;
    border-bottom : 1px solid #000;
`;

const TopBar = ({title}) => {
  return  <TopBarBlock>  {title} </TopBarBlock>;
};

export default TopBar
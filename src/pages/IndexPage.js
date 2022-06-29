import React from 'react';
import TopBar from '../components/common/TopBar';

const IndexPage = () => {
    const handleClick = () => {
        let tmpwindow = window.open("about:blank");
        const clientId = "ecd4be50-b37e-48c3-b084-84a24129909a";
        tmpwindow.location.href = 'https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=ecd4be50-b37e-48c3-b084-84a24129909a&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0'; 
    };

  return (
    <div>
        <TopBar title={"사용자 인증"}></TopBar>
        <button onClick={handleClick}>사용자 인증받기</button>
    </div>
  );
};

export default IndexPage
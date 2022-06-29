import axios from "axios";
import React, { useEffect, useState } from "react";
import TopBar from "../components/common/TopBar";
import MainCard from "../components/main/MainCard";

const MainPage = () => {
    const [accountList, setAccountList] = useState([]);
    useEffect(() => {
        console.log("안녕");
        getAccountList();
    }, []);

    const getAccountList = () => {
        const accessToken = localStorage.getItem("accessToken");
        const userSeqNo = localStorage.getItem("userSeqNo");
        console.log(accessToken, userSeqNo);
        //axios 로 /v2.0/user/me?user_seq_no=1100034736 요청 작성하기
        //header Authorization 값 입력
        //params
        const option = {
        method: "GET",
        url: "/v2.0/user/me",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        params: { user_seq_no: userSeqNo },
        };
        axios(option).then(({ data }) => {
        console.log(data.res_list);
        setAccountList(data.res_list);
        });
    };

    return (
        <div>
        <TopBar title={"계좌 목록"} />
        {accountList.map((account) => {
            return (
            <MainCard
                bankName={account.bank_name}
                fintechUseNo={account.fintech_use_num}
            ></MainCard>
            );
        })}
        </div>
    );
};

export default MainPage;
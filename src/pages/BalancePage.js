import React, { useEffect, useState } from "react";
import BalanceCard from "../components/balance/BalanceCard";
import TopBar from "../components/common/TopBar";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";

const BalancePage = () => {
    const fintechUseNo = queryString.parse(useLocation().search).fintechUseNo;
    const [balanceData, setBalanceData] = useState({});
    console.log(fintechUseNo);

    useEffect(() => {
        getBalance();
    }, []);

    const getBalance = () => {
        const accessToken = localStorage.getItem("accessToken");
        const userSeqNo = localStorage.getItem("userSeqNo");
        console.log(accessToken, userSeqNo);

        const genTransId = () => {
        let countnum = Math.floor(Math.random() * 1000000000) + 1;
        let transId = "M202201241U" + countnum;
        return transId;
        };

        const option = {
        method: "GET",
        url: "/v2.0/account/balance/fin_num",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        params: {
            bank_tran_id: genTransId(),
            fintech_use_num: fintechUseNo,
            tran_dtime: "20220630105000",
        },
        };
        axios(option).then(({ data }) => {
        console.log(data);
        setBalanceData(data);
        });
    };
    //useEffect
    //amount state
    //axios 요청을 작성
    //banktransid 작성 ??<----
    return (
        <div>
        <TopBar title={"잔액조회"}></TopBar>
        <BalanceCard>
            bankName={balanceData.bank_name}
            fintechNo={fintechUseNo}
            balance={balanceData.balance_amt}
        </BalanceCard>
        </div>
    );
};

export default BalancePage;
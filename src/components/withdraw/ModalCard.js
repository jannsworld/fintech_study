import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const ModalCardBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 20px;
  border: 1px #112211 solid;
`;
const CardTitle = styled.div`
  font-size: 1rem;
  color: black;
`;
const FintechUseNo = styled.div`
  font-size: 0.7rem;
  margin-bottom: 30px;
`;

const WithDrawButton = styled.button`
  border: none;
  padding: 0.3rem;
  background: #2aa450;
  color: white;
  margin-top: 0.3rem;
`;

const ModalCard = ({ bankName, fintechUseNo, tofintechno }) => {
  const [amount, setamount] = useState("");

  const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000) + 1;
    let transId = "M202201241U" + countnum; 
    return transId;
  };

  const handlePayButtonClick = () => {
    //출금 이체 발생
    //data params json
    const accessToken = localStorage.getItem("accessToken");

    const data = {
      bank_tran_id: genTransId(),
      cntr_account_type: "N",
      cntr_account_num: "7832932596",
      dps_print_content: "쇼핑몰환불",
      fintech_use_num: fintechUseNo,
      wd_print_content: "오픈뱅킹출금",
      tran_amt: amount,
      tran_dtime: "20220630145100",
      req_client_name: "홍길동",
      req_client_fintech_use_num: "199159919057870987723340",
      req_client_num: "HONGGILDONG1234",
      transfer_purpose: "ST",
      recv_client_name: "홍길동",
      recv_client_bank_code: "095",
      recv_client_account_num: "7832932596",
    };
    const option = {
      method: "POST",
      url: "/v2.0/transfer/withdraw/fin_num",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: data,
    };
    axios(option).then(({ data }) => {
      console.log(data);
      if (data.rsp_code === "A0000") {
        deposit();
      }
    });
  };

  const deposit = () => {
    const twoLeggedToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJUOTkxNTk5MTkwIiwic2NvcGUiOlsib29iIl0sImlzcyI6Imh0dHBzOi8vd3d3Lm9wZW5iYW5raW5nLm9yLmtyIiwiZXhwIjoxNjY0MzQ5MjA5LCJqdGkiOiI3NWJhZjViNS0wNjBmLTRlMjQtOWUxOS01NWExMTI2OGRmYTgifQ.5iiamvwpJGwH3xuiu9KK7HZK9BSm4uHVMMh7ja9x8Ug";
    const sendData = {
      cntr_account_type: "N",
      cntr_account_num: "4262679045",
      wd_pass_phrase: "NONE",
      wd_print_content: "환불금액",
      name_check_option: "off",
      tran_dtime: "20220630151500",
      req_cnt: "1",
      req_list: [
        {
          tran_no: "1",
          bank_tran_id: genTransId(),
          fintech_use_num: tofintechno,
          print_content: "쇼핑몰환불",
          tran_amt: amount,
          req_client_name: "홍길동",
          req_client_fintech_use_num: fintechUseNo,
          req_client_num: "HONGGILDONG1234",
          transfer_purpose: "TR",
        },
      ],
    };
    const option = {
      method: "POST",
      url: "/v2.0/transfer/deposit/fin_num",
      headers: {
        Authorization: `bearer ${twoLeggedToken}`,
      },
      data: sendData,
    };

    axios(option).then(({ data }) => {
      console.log(data);
      if (data.rsp_code === "A0000") {
        alert("결제 성공");
      }
    });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setamount(value);
  };

  return (
    <ModalCardBlock>
      <CardTitle>{bankName}</CardTitle>
      <FintechUseNo>{fintechUseNo}</FintechUseNo>
      <p>{tofintechno}로 돈을 보냅니다.</p>
      <input onChange={handleChange}></input>
      <WithDrawButton onClick={handlePayButtonClick}>결제하기</WithDrawButton>
    </ModalCardBlock>
  );
};

export default ModalCard;
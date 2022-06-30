import React, { useState } from "react";
import TopBar from "../components/common/TopBar";
import { QrReader } from "react-qr-reader";
import ModalWithdraw from "../components/withdraw/ModalWithdraw";
import Modal from "react-modal";

const QrReaderPage = () => {
  const [data, setData] = useState("No result");
  const [openModal, setOpenModal] = useState(false); //no camera : true
  
  const CustomStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      zIndex: "9",
    },
    content: {
      width: "95%",
      border: `0 solid black`,
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: "99999",
    },
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <TopBar title={"QR 리더"}></TopBar>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
            setOpenModal(true);
          }
          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: "50%" ,height : "50%" }}
      />
      <p>{data}</p>
      <Modal
        isOpen={openModal}
        style={CustomStyles}
        onRequestClose={closeModal}
      >
        <ModalWithdraw tofintechno={data}></ModalWithdraw>
      </Modal>
    </div>
  );
};

export default QrReaderPage;
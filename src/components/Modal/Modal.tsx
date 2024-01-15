import React from "react";
import "./modal.css";
// import { useGlobalContext } from "../../context";
import nft from "./nft.jpg";

type Props = {
  open: boolean;
  onClose: () => void;
};

const Modal = ({ open, onClose }: Props) => {
  if (!open) return null;

  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <img className="nft-image" src={nft} alt="/" />
        <div className="modalRight">
          <p className="closeBtn" onClick={onClose}>
            X
          </p>
          <div className="content">
            <p>Do you want a</p>
            <h1>$20 CREDIT</h1>
            <p>for your first tade?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

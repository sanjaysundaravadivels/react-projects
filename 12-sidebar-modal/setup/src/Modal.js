import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalCOntext } from "./context";
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalCOntext();
  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h3>Modal content</h3>
        <button onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;

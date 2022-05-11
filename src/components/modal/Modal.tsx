import React, { useContext } from "react";
import ReactDOM from "react-dom";
import GlobalContext from "../../context/globalContext";
import MovieDetail from "../MovieDetail/MovieDetail";
import styles from "./Modal.module.scss";

interface ModalProps {}

export const Modal: React.FC<ModalProps> = () => {
  const context = useContext(GlobalContext);

  const handleClose = () => {
    context?.setShowModal(false);
  };

  if (context?.showModal) {
    return ReactDOM.createPortal(
      <div className={styles.modal}>
        <div className={styles.modal__container} onClick={handleClose}></div>
        <MovieDetail />
      </div>,
      document.getElementById("modal__root")!
    );
  }

  return null;
};

export default Modal;

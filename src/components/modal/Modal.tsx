import React, { useContext, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { VscError } from "react-icons/vsc";
import GlobalContext from "../../context/globalContext";
import MovieDetail from "../MovieDetail/MovieDetail";
import Spinner from "../spinner/Spinner";
import styles from "./Modal.module.scss";

interface ModalProps {}

export const Modal: React.FC<ModalProps> = () => {
  const Table = lazy(() => import("../characterTable/CharacterTable"));
  const context = useContext(GlobalContext);

  const handleClose = () => {
    context?.setShowModal(false);
    context?.setCharacters(undefined);
  };

  if (context?.showModal) {
    return ReactDOM.createPortal(
      <div className={styles.modal}>
        <div className={styles.modal__container} onClick={handleClose}></div>
        <div
          className={`${styles.modal__box} ${
            context.showModal ? styles.moveIn : styles.moveOut
          }`}
        >
          <h3>CHARACTERS</h3>
          {context.error ? (
            <div className={styles.error}>
              <p>{context.error}</p>
              <i>
                <VscError />
              </i>
            </div>
          ) : (
            <Suspense fallback={<p>Loading...</p>}>
              {context.characters ? <Table /> : <Spinner />}
            </Suspense>
          )}
        </div>
        <MovieDetail />
      </div>,
      document.getElementById("modal__root")!
    );
  }

  return null;
};

export default Modal;

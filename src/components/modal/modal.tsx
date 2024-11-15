import { ReactNode } from "react";
import ReactDOM from "react-dom";
import styles from './modal.module.scss';

const modalRoot = document.getElementById("modal");

interface IModalProps {
  children?: ReactNode;
}

function Modal({children}: IModalProps) {
  return ReactDOM.createPortal(<div className={styles.container}><div className={styles.modal}></div></div>, modalRoot!);
}


export {Modal}

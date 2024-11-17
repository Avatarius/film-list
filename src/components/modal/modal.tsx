import { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.scss";
import { ButtonClose } from "../buttonClose/buttonClose";

const modalRoot = document.getElementById("modal");

interface IModalProps {
  children?: ReactNode;
  onClose: () => void;
}

function Modal(props: IModalProps) {
  const { children, onClose } = props;

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      e.key === "Escape" && onClose();
    }

    function handleClickOutside(e: MouseEvent) {
      const target = e.target as HTMLElement;
      target.classList.contains(styles.container) && onClose();
    }

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className={styles.container}>
      <div className={styles.modal}>
        <ButtonClose onClick={onClose} />
        {children}
      </div>
    </div>,
    modalRoot!
  );
}

export { Modal };

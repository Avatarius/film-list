import { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.scss";

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
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className={styles.container}>
      <div className={styles.modal}>
        <button className={styles.button} onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="-0.5 0 25 25"
            width={50}
            height={50}
          >
            <g
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <path d="m3 21.32 18-18M3 3.32l18 18" />
            </g>
          </svg>
        </button>
        {children}
      </div>
    </div>,
    modalRoot!
  );
}

export { Modal };

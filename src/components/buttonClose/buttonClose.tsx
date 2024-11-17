import styles from "./buttonClose.module.scss";

interface IButtonCloseProps {
  onClick: () => void;
}

function ButtonClose({ onClick }: IButtonCloseProps) {
  return (
    <button className={styles.button} onClick={onClick}>
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
  );
}

export { ButtonClose };

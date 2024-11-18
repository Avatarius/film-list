import styles from "./buttonEdit.module.scss";

interface IButtonEditProps {
  onClick: (e: React.MouseEvent) => void;
}

function ButtonEdit({ onClick }: IButtonEditProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
        width={35}
        height={35}
        fill="currentColor"
        className={styles.svg}
      >
        <path d="m12 25 3 3 15-15-3-3-15 15zm-1 1 3 3-4 1z" />
      </svg>
    </button>
  );
}

export { ButtonEdit };

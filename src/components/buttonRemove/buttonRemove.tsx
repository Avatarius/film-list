import styles from "./buttonRemove.module.scss";
import clsx from "clsx";

interface IButtonRemoveProps {
  onClick: (e: React.MouseEvent) => void;
}

function ButtonRemove({onClick}: IButtonRemoveProps) {
  return (
    <button
      className={clsx(styles.button, styles["button-remove"])}
      onClick={onClick}
      data-button-remove
    >
      <svg viewBox="-0.5 0 19 19" width={35} height={35}>
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M4.917 14.889c0 .468.687 1.111 1.146 1.111h6.875c.458 0 1.145-.643 1.145-1.111V6H4.917v8.889ZM15 3.465h-2.444L11.333 2H7.667L6.444 3.465H4V4.93h11V3.465Z"
        />
      </svg>
    </button>
  );
}

export { ButtonRemove };

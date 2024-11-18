import styles from "./buttonLike.module.scss";
import clsx from "clsx";

interface IButtonLikeProps {
  onClick: (e: React.MouseEvent) => void;
  isFavorite: boolean;
}

function ButtonLike({ onClick, isFavorite }: IButtonLikeProps) {
  return (
    <button
      className={clsx(styles.button, isFavorite && styles.button_active)}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        stroke="#fff"
        fill="currentColor"
        strokeWidth={2}
        width={30}
        height={30}
        className={styles.svg}
      >
        <path d="M43 17.077c0-5.654-4.583-10.238-10.237-10.238-3.723 0-6.971 1.993-8.763 4.964-1.792-2.97-5.04-4.964-8.763-4.964C9.583 6.84 5 11.423 5 17.077c0 1.292.25 2.524.687 3.662C9.072 30.476 24 41.161 24 41.161s14.928-10.685 18.314-20.422c.437-1.138.686-2.37.686-3.662Z" />
      </svg>
    </button>
  );
}

export { ButtonLike };

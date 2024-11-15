import clsx from "clsx";
import styles from "./filter.module.scss";

function Filter() {
  return (
    <div className={styles.container}>
      <div className={styles['button-container']}>
        <span className={styles.highlight}></span>
        <button className={clsx(styles.button, styles.button_active)}>
          Все
        </button>
        <button className={styles.button}>Избранное</button>
      </div>
    </div>
  );
}

export { Filter };

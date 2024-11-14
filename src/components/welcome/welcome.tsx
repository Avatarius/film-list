import styles from "./welcome.module.scss";

function Welcome() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        <span className={styles.letter}>W</span>
        <span className={styles.letter}>e</span>
        <span className={styles.letter}>l</span>
        <span className={styles.letter}>c</span>
        <span className={styles.letter}>o</span>
        <span className={styles.letter}>m</span>
        <span className={styles.letter}>e</span>
      </p>
    </div>
  );
}

export { Welcome };

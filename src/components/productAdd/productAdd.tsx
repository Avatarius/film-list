import { SyntheticEvent } from "react";
import styles from "./productAdd.module.scss";
import clsx from "clsx";

function ProductAdd() {


  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Добавить фильм</h2>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <label className={styles.label}>
          Название
          <input type="text" required className={styles.label__input} />
        </label>
        <label className={styles.label}>
          Название в оригинале
          <input type="text" required className={styles.label__input} />
        </label>
        <label className={styles.label}>
          Ссылка на катинку
          <input type="text" required className={styles.label__input} />
        </label>
        <label className={styles.label}>
          Год выпуска
          <input type="number" required className={clsx(styles.label__input, styles.label__input_number)} />
        </label>
        <label className={styles.label}>
          Страна
          <input type="text" required className={styles.label__input} />
        </label>
        <label className={styles.label}>
          Описание
          <input type="text" className={styles.label__input} />
        </label>
        <button className={styles.button} type="submit">Добавить</button>
      </form>
    </div>
  );
}

export { ProductAdd };

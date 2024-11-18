import { IFormData } from "../../utils/types";
import styles from "./form.module.scss";
import { Dispatch, FormEvent, SetStateAction } from "react";
import clsx from "clsx";

interface IFormProps {
  formData: IFormData;
  setFormData: Dispatch<SetStateAction<IFormData>>;
  handleSubmit: (e: FormEvent) => void;
  buttonText: string;
}

function Form(props: IFormProps) {
  const { formData, setFormData, handleSubmit, buttonText } = props;
  function handleChange(e: React.FormEvent) {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  }

  const isButtonDisabled = Object.values(formData).some((item) => item === "");

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <label className={styles.label}>
        Название
        <input
          type="text"
          required
          className={styles.input}
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label className={styles.label}>
        Название в оригинале
        <input
          type="text"
          required
          className={styles.input}
          name="nameOrig"
          value={formData.nameOrig}
          onChange={handleChange}
        />
      </label>
      <label className={styles.label}>
        Ссылка на катинку
        <input
          type="text"
          required
          className={styles.input}
          name="poster"
          value={formData.poster}
          onChange={handleChange}
        />
      </label>
      <label className={styles.label}>
        Год выпуска
        <input
          type="number"
          required
          className={clsx(styles.input, styles.input_number)}
          name="year"
          value={formData.year}
          onChange={handleChange}
        />
      </label>
      <label className={styles.label}>
        Страна
        <input
          type="text"
          required
          className={styles.input}
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
      </label>
      <label className={styles.label}>
        Описание
        <textarea
          rows={5}
          className={clsx(styles.input, styles.input_textarea)}
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <button
        className={styles.button}
        type="submit"
        disabled={isButtonDisabled}
      >
        {buttonText}
      </button>
    </form>
  );
}

export { Form };

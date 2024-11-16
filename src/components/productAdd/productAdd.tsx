import { Dispatch, FormEvent, SetStateAction } from "react";
import styles from "./productAdd.module.scss";
import clsx from "clsx";
import { IFormData, INewFilm } from "../../utils/types";
import { addNewFilm } from "../../services/thunk/films";
import { useDispatch } from "../../services/store";
import { useNavigate } from "react-router-dom";

interface IProductAddProps {
  formData: IFormData;
  setFormData: Dispatch<SetStateAction<IFormData>>;
}

function ProductAdd({formData, setFormData} : IProductAddProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const newFilm: INewFilm = {...formData, isFavorite: false, year: Number(formData.year)};
    dispatch(addNewFilm(newFilm)).then(() => {
      navigate('/products');
    });
  }

  function handleChange(e: React.FormEvent) {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    setFormData({ ...formData, [name]: value });
  }

  const isButtonDisabled = Object.values(formData).some(item => item === '');

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Добавить фильм</h2>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <label className={styles.label}>
          Название
          <input
            type="text"
            required
            className={styles.label__input}
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
            className={styles.label__input}
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
            className={styles.label__input}
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
            className={clsx(styles.label__input, styles.label__input_number)}
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
            className={styles.label__input}
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </label>
        <label className={styles.label}>
          Описание
          <textarea
            rows={5}
            className={clsx(styles.label__input, styles.label__textarea)}
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <button className={styles.button} type="submit" disabled={isButtonDisabled}>
          Добавить
        </button>
      </form>
    </div>
  );
}

export { ProductAdd };

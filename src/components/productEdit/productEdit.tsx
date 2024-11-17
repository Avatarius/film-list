import styles from "./productEdit.module.scss";
import { Form } from "../form/form";
import { useDispatch, useSelector } from "../../services/store";
import { selectFilmById } from "../../services/slices/films";
import { useNavigate, useParams } from "react-router-dom";
import { IFormData, INewFilm } from "../../utils/types";
import { FormEvent, useState } from "react";
import { editFilmThunk, fetchFilmsThunk } from "../../services/thunk/films";

interface IProductEditProps {}

function ProductEdit({}: IProductEditProps) {
  const id = useParams().id;
  const film = useSelector((state) => selectFilmById(state, id));
  if (!film) {
    return null;
  }
  const initialFormData: IFormData = { ...film, year: film.year.toString() };
  const [formData, setFormData] = useState<IFormData>(initialFormData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const updatedFilm: INewFilm = {
      ...formData,
      isFavorite: film?.isFavorite ?? false,
      year: Number(formData.year),
    };
    dispatch(editFilmThunk({ id: id ?? "", updatedFilm })).then(() => {
      navigate('/products');
      dispatch(fetchFilmsThunk());
    });
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Редактировать фильм</h2>
      <Form
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        buttonText="Редактировать"
      />
    </div>
  );
}

export { ProductEdit };

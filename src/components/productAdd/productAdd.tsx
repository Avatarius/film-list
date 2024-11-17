import { Dispatch, FormEvent, SetStateAction } from "react";
import styles from "./productAdd.module.scss";
import { IFormData, INewFilm } from "../../utils/types";
import { addNewFilmThunk, fetchFilmsThunk } from "../../services/thunk/films";
import { useDispatch } from "../../services/store";
import { useNavigate } from "react-router-dom";
import { Form } from "../form/form";

interface IProductFormProps {
  formData: IFormData;
  setFormData: Dispatch<SetStateAction<IFormData>>;
}

function ProductAdd({ formData, setFormData }: IProductFormProps) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const newFilm: INewFilm = {
      ...formData,
      isFavorite: false,
      year: Number(formData.year),
    };
    dispatch(addNewFilmThunk(newFilm)).then(() => {
      navigate("/products");
      dispatch(fetchFilmsThunk());
      setFormData({
        name: "",
        nameOrig: "",
        year: "",
        country: "",
        description: "",
        poster: "",
      });
    });
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Добавить фильм</h2>
      <Form
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        buttonText="Добавить"
      />
    </div>
  );
}

export { ProductAdd };

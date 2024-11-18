import styles from "./productEdit.module.scss";
import { Form } from "../form/form";
import { useDispatch, useSelector } from "../../services/store";
import { selectAllFilms, selectFilmById } from "../../services/slices/films";
import { useNavigate, useParams } from "react-router-dom";
import { IFormData, INewFilm } from "../../utils/types";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { editFilmThunk, fetchFilmsThunk } from "../../services/thunk/films";

function ProductEdit() {
  const id = useParams().id;
  const film = useSelector((state) => selectFilmById(state, id ?? ""));

  const [formData, setFormData] = useState<IFormData>({
    name: film?.name ?? "",
    nameOrig: film?.nameOrig ?? "",
    poster: film?.poster ?? "",
    year: film?.year.toString() ?? "",
    country: film?.country ?? "",
    description: film?.description ?? "",
  });

  useEffect(() => {
    setFormData({
      name: film?.name ?? "",
      nameOrig: film?.nameOrig ?? "",
      poster: film?.poster ?? "",
      year: film?.year.toString() ?? "",
      country: film?.country ?? "",
      description: film?.description ?? "",
    });
  }, [film]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!film) {
    return null;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const updatedFilm: INewFilm = {
      ...formData,
      isFavorite: film?.isFavorite ?? false,
      year: Number(formData.year),
    };
    console.log(id);

    dispatch(editFilmThunk({ id: id ?? "", updatedFilm })).then(() => {
      navigate("/products");
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

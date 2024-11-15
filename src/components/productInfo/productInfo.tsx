import { useParams } from "react-router-dom";
import styles from "./productInfo.module.scss";
import { useDispatch, useSelector } from "../../services/store";
import { selectFilmById } from "../../services/slices/films";
import clsx from "clsx";
import { updateFilm } from "../../services/thunk/films";

function ProductInfo() {
  const id = useParams().id ?? '';
  const film = useSelector((state) => selectFilmById(state, id));
  const dispatch = useDispatch();

  if (!film) {
    return null;
  }

  const { name, nameOrig, year, country, description, poster, isFavorite } = film;

  function likeCard(e: React.MouseEvent) {
    dispatch(updateFilm({id: id, isFavorite: !isFavorite}));
  }


  return (
    <article className={styles.container}>
      <div className={styles.poster}>
        <img src={poster} alt={name} className={styles.poster__img}/>
      </div>
      <div className={styles.info}>
        <div className={styles["info__title-container"]}>
          <h2 className={styles.info__title}>{name}</h2>
          <button
              className={clsx(
                styles.button,
                styles["button-like"],
                isFavorite && styles["button-like_active"]
              )}
              onClick={likeCard}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                stroke="#fff"
                fill="currentColor"
                strokeWidth={2}
                width={30}
                height={30}
                className={styles["button-like__svg"]}
              >
                <path d="M43 17.077c0-5.654-4.583-10.238-10.237-10.238-3.723 0-6.971 1.993-8.763 4.964-1.792-2.97-5.04-4.964-8.763-4.964C9.583 6.84 5 11.423 5 17.077c0 1.292.25 2.524.687 3.662C9.072 30.476 24 41.161 24 41.161s14.928-10.685 18.314-20.422c.437-1.138.686-2.37.686-3.662Z" />
              </svg>
            </button>
        </div>
        <p className={styles.info__year}>{`${nameOrig}, ${year}`}</p>
        <p className={styles.info__country}>{country}</p>
        <p>{description}</p>
      </div>
    </article>
  );
}

export { ProductInfo };

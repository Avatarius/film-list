import styles from "./productInfo.module.scss";
import { useDispatch } from "../../services/store";
import clsx from "clsx";
import { fetchFilmsThunk, removeFilmThunk, likeFilmThunk } from "../../services/thunk/films";
import { IFilm } from "../../utils/types";
import { SyntheticEvent } from "react";
import defaultImage from "../../images/default.jpg";
import { ButtonLike } from "../buttonLike/buttonLike";
import { ButtonRemove } from "../buttonRemove/buttonRemove";
import { ButtonEdit } from "../buttonEdit/buttonEdit";

interface IProductInfo {
  film: IFilm | null;
  isCard: boolean;
}

function ProductInfo({ film, isCard }: IProductInfo) {
  const dispatch = useDispatch();
  if (!film) {
    return null;
  }
  const { id, name, nameOrig, year, country, description, poster, isFavorite } =
    film;

  function likeCard(e: React.MouseEvent) {
    e.preventDefault();
    dispatch(likeFilmThunk({ id: id, isFavorite: !isFavorite }));
  }

  function removeCard(e: React.MouseEvent) {
    e.preventDefault();
    dispatch(removeFilmThunk(id)).then(() => {
      dispatch(fetchFilmsThunk());
    });
  }

  function editCard(e: React.MouseEvent) {
    e.preventDefault();
  }

  return (
    <article
      className={clsx(styles.container, isCard && styles.container_card)}
    >
      <div className={styles.poster}>
        {isCard && (
          <div className={styles.panel}>
            <ButtonRemove onClick={removeCard} />
            <ButtonEdit id={id}/>
          </div>
        )}
        <img
          src={poster}
          alt={name}
          className={styles.poster__img}
          onError={(e: SyntheticEvent) => {
            const img = e.target as HTMLImageElement;
            img.src = defaultImage;
            img.alt = "poster";
          }}
        />
      </div>
      <div className={styles.info}>
        <div className={styles["info__title-container"]}>
          <h2
            className={clsx(
              styles.info__title,
              isCard && styles.info__title_card
            )}
          >
            {name}
          </h2>
          <ButtonLike onClick={likeCard} isFavorite={isFavorite} />
        </div>
        <p className={styles.info__year}>{`${nameOrig}, ${year}`}</p>
        <p className={styles.info__country}>{country}</p>
        <p
          className={clsx(
            styles.info__description,
            isCard && styles.info__description_card
          )}
        >
          {description}
        </p>
      </div>
    </article>
  );
}

export { ProductInfo };

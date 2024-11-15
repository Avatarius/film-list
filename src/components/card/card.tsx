import styles from "./card.module.scss";
import { IFilm } from "../../utils/types";
import clsx from "clsx";
import { updateFilm } from "../../services/thunk/films";
import { useDispatch } from "../../services/store";

interface ICardProps {
  item: IFilm;
}

function Card({ item }: ICardProps) {
  const { id, name, nameOrig, year, country, poster, description, isFavorite } = item;
  const dispatch = useDispatch();

  return (
    <article className={styles.container}>
      <button
        className={clsx(styles.button, styles['button-remove'])}
        onClick={() => console.log("remove")}
      >
        <svg viewBox="-0.5 0 19 19" width={35} height={35}>
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M4.917 14.889c0 .468.687 1.111 1.146 1.111h6.875c.458 0 1.145-.643 1.145-1.111V6H4.917v8.889ZM15 3.465h-2.444L11.333 2H7.667L6.444 3.465H4V4.93h11V3.465Z"
          />
        </svg>
      </button>
      <div
        className={styles.poster}
        style={{ backgroundImage: `url(${poster})` }}
      ></div>
      <div className={styles.info}>
        <div className={styles["info__title-container"]}>
          <h2 className={styles.info__title}>{name}</h2>
          <button
            className={clsx(styles.button, styles['button-like'], isFavorite && styles['button-like_active'])}
            onClick={() => dispatch(updateFilm({id: id, isFavorite: !isFavorite}))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              stroke="#fff"
              fill="currentColor"
              strokeWidth={2}
              width={30}
              height={30}
              className={styles['button-like__svg']}
            >
              <path d="M43 17.077c0-5.654-4.583-10.238-10.237-10.238-3.723 0-6.971 1.993-8.763 4.964-1.792-2.97-5.04-4.964-8.763-4.964C9.583 6.84 5 11.423 5 17.077c0 1.292.25 2.524.687 3.662C9.072 30.476 24 41.161 24 41.161s14.928-10.685 18.314-20.422c.437-1.138.686-2.37.686-3.662Z" />
            </svg>
          </button>
        </div>
        <p className={styles.info__year}>{`${nameOrig}, ${year}`}</p>
        <p className={styles.info__country}>{country}</p>
        <p className={styles.info__description}>{description}</p>
      </div>
    </article>
  );
}

export { Card };

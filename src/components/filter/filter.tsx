import clsx from "clsx";
import styles from "./filter.module.scss";
import { useDispatch, useSelector } from "../../services/store";
import { selectFilter, setFilter } from "../../services/slices/films";
import { FilterType } from "../../utils/types";

function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <div className={styles["button-container"]}>
        <button
          className={clsx(
            styles.button,
            filter === FilterType.ALL && styles.button_active
          )}
          onClick={() => dispatch(setFilter(FilterType.ALL))}
        >
          Все
        </button>
        <button
          className={clsx(
            styles.button,
            filter === FilterType.FAVORITE && styles.button_active
          )}
          onClick={() => dispatch(setFilter(FilterType.FAVORITE))}
        >
          Избранное
        </button>
      </div>
    </div>
  );
}

export { Filter };

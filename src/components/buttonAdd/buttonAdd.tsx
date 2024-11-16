import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./buttonAdd.module.scss";

function ButtonAdd() {
  const location = useLocation();
  return (
    <button
      className={styles.container}
    >
      <Link to={'/create-product'} state={{backgroundLocation: location}} className={styles.link}>
      + Добавить фильм
      </Link>
    </button>
  );
}

export { ButtonAdd };

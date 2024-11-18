import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./buttonAdd.module.scss";

function ButtonAdd() {
  const location = useLocation();
  return (
    <Link to="/create-product" state={{ backgroundLocation: location }}>
      <button className={styles.container}>+ Добавить фильм</button>
    </Link>
  );
}

export { ButtonAdd };

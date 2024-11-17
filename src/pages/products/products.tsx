import { ButtonAdd } from "../../components/buttonAdd/buttonAdd";
import { CardList } from "../../components/cardList/cardList";
import { Filter } from "../../components/filter/filter";
import styles from "./products.module.scss";
import { useDispatch, useSelector } from "../../services/store";
import { selectIsLoading } from "../../services/slices/films";
import { Loader } from "../../components/loader/loader";
import { useEffect } from "react";
import { fetchFilmsThunk } from "../../services/thunk/films";

function Products() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFilmsThunk());
  }, [])
  const isLoading = useSelector(selectIsLoading);
  if (isLoading) {
    return <Loader/>
  } else {

  }
  return (
    <div className={styles.container}>
      <div>
        <ButtonAdd />
        <Filter />
        <CardList />
      </div>
    </div>
  );
}

export { Products };

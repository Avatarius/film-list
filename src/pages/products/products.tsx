import { ButtonAdd } from "../../components/buttonAdd/buttonAdd";
import { CardList } from "../../components/cardList/cardList";
import { Filter } from "../../components/filter/filter";
import styles from "./products.module.scss";

function Products() {
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

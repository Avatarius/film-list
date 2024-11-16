import { Link, useLocation } from "react-router-dom";
import {
  selectAllFilms,
  selectFavoriteFilms,
  selectFilter,
} from "../../services/slices/films";
import { useSelector } from "../../services/store";
import { FilterType } from "../../utils/types";
import { Card } from "../card/card";
import styles from "./cardList.module.scss";
import { ProductInfo } from "../productInfo/productInfo";

function CardList() {
  const location = useLocation();
  const filter = useSelector(selectFilter);
  const characterList =
    filter === FilterType.FAVORITE
      ? useSelector(selectFavoriteFilms)
      : useSelector(selectAllFilms);
  const cardList = characterList.map((item) => {
    const {id} = item;
    return (
      <li key={id} className={styles.card}>
        <Link to={`/products/${id}`} className={styles.link} state={{backgroundLocation: location, id}}>
        <ProductInfo film={item} isCard={true}/>
        </Link>
      </li>
    )
  });
// <Card item={item} key={item.id}/>
  return <ul className={styles.container}>{cardList}</ul>;
}

export { CardList };

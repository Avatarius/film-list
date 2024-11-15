import { useLocation } from "react-router-dom";
import {
  selectAllFilms,
  selectFavoriteFilms,
  selectFilter,
} from "../../services/slices/films";
import { useSelector } from "../../services/store";
import { FilterType } from "../../utils/types";
import { Card } from "../card/card";
import styles from "./cardList.module.scss";

function CardList() {
  const filter = useSelector(selectFilter);
  const characterList =
    filter === FilterType.FAVORITE
      ? useSelector(selectFavoriteFilms)
      : useSelector(selectAllFilms);
  const cardList = characterList.map((item) => (
    <Card item={item} key={item.id}/>
  ));

  return <ul className={styles.container}>{cardList}</ul>;
}

export { CardList };

import { selectFilms } from "../../services/slices/films";
import { useSelector } from "../../services/store";
import { Card } from "../card/card";
import styles from './cardList.module.scss';

function CardList() {
  const characterList = useSelector(selectFilms);
  const cardList = characterList.map((item) => (
    <Card item={item} key={item.id}/>
  ))

  return (
    <ul className={styles.container}>
      {cardList}
    </ul>
  )
}


export {CardList};

import { selectCharacters } from "../../services/slices/characters";
import { useSelector } from "../../services/store";
import { Card } from "../card/card";
import styles from './cardList.module.scss';

function CardList() {
  const characterList = useSelector(selectCharacters);
  const cardList = characterList.map((item) => (
    <Card item={item} key={crypto.randomUUID()}/>
  ))

  return (
    <ul className={styles.container}>
      {cardList}
    </ul>
  )
}


export {CardList};

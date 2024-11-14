import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
import { IFilm } from "./types";

function getCharacters() {
  return fetch("https://api.disneyapi.dev/character")
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res.status);
      }
    })
    .then((data) => {
      return data;
    });
}

async function getFilms() {
  const list: IFilm[] = [];
  const querySnapshot = await getDocs(collection(db, 'films'));
  querySnapshot.forEach((doc) => {
    const product = {...doc.data() as IFilm, id: doc.id};
    list.push(product);
  });
  return list;
}

/* async function addDocument(order: IOrder) {
  const docRef = await addDoc(collection(db, 'orders'), order);
  return docRef;
} */


export { getCharacters, getFilms };

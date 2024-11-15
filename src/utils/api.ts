import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { IFilm } from "./types";


async function getFilms() {
  const list: IFilm[] = [];
  const querySnapshot = await getDocs(collection(db, 'films'));
  querySnapshot.forEach((doc) => {
    const product = {...doc.data() as IFilm, id: doc.id};
    list.push(product);
  });
  return list;
}

async function likeFilm(id: string, isFavorite: boolean) {
  const docRef = doc(db, 'films', id);
  await updateDoc(docRef, {
    isFavorite
  });
  const docSnap = await getDoc(docRef);
  return {...docSnap.data(), id: docSnap.id} as IFilm;

}

/* async function addDocument(order: IOrder) {
  const docRef = await addDoc(collection(db, 'orders'), order);
  return docRef;
} */


export {getFilms, likeFilm };

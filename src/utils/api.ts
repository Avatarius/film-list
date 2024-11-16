import { addDoc, collection, doc, getDoc, getDocs, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../services/firebase";
import { IFilm, INewFilm } from "./types";


async function getFilms() {
  const list: IFilm[] = [];
  const querySnapshot = await getDocs(collection(db, 'films'));
  querySnapshot.forEach((doc) => {
    const product = {...doc.data() as IFilm, id: doc.id};
    console.log(serverTimestamp());

    list.push(product);
  });
  return list;
}

async function likeFilmApi(id: string, isFavorite: boolean) {
  const docRef = doc(db, 'films', id);
  await updateDoc(docRef, {
    isFavorite
  });
  const docSnap = await getDoc(docRef);
  return {...docSnap.data(), id: docSnap.id} as IFilm;
}

async function addFilmApi(film: INewFilm) {
  const docRef = await addDoc(collection(db, 'films'), film);
  return docRef;
}


export {getFilms, likeFilmApi, addFilmApi };

import { addDoc, collection, doc, getDoc, getDocs, updateDoc, serverTimestamp, deleteDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { IFilm, INewFilm } from "./types";


async function getFilms() {
  const list: IFilm[] = [];
  const querySnapshot = await getDocs(collection(db, 'films'));
  querySnapshot.forEach((doc) => {
    const product = {...doc.data() as IFilm, id: doc.id};

    list.push(product);
  });
  return list;
}

async function likeFilmApi(id: string, isFavorite: boolean) {
  const docRef = doc(db, 'films', id);
  await updateDoc(docRef, {
    isFavorite,
    timestamp: serverTimestamp()
  });
  const docSnap = await getDoc(docRef);
  return {...docSnap.data(), id: docSnap.id} as IFilm;
}

async function addFilmApi(film: INewFilm) {
  const docRef = await addDoc(collection(db, 'films'), {...film, timestamp: serverTimestamp()});
  return docRef;
}

async function removeFilmApi(id: string) {
  const result = await deleteDoc(doc(db, 'films', id));
  return result;
}


export {getFilms, likeFilmApi, addFilmApi, removeFilmApi };

import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  serverTimestamp,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../services/firebase";
import { IFilm, INewFilm } from "./types";

async function getFilmsApi() {
  const list: IFilm[] = [];
  const querySnapshot = await getDocs(collection(db, "films"));
  querySnapshot.forEach((doc) => {
    const product = { ...(doc.data() as IFilm), id: doc.id };

    list.push(product);
  });
  return list;
}

async function likeFilmApi(id: string, isFavorite: boolean) {
  const docRef = doc(db, "films", id);
  await updateDoc(docRef, {
    isFavorite,
    timestamp: serverTimestamp(),
  });
  return id;
}

async function addFilmApi(film: INewFilm) {
  const docRef = await addDoc(collection(db, "films"), {
    ...film,
    timestamp: serverTimestamp(),
  });
  const docSnap = await getDoc(docRef);
  return {...docSnap.data(), id: docSnap.id} as IFilm;
}

async function removeFilmApi(id: string) {
  await deleteDoc(doc(db, "films", id));
  return id;
}

async function editFilmApi(id: string, updatedFilm: INewFilm) {
  const timestamp = serverTimestamp();
  const docRef = doc(db, "films", id);
  const result = await updateDoc(docRef, {
    ...updatedFilm,
    timestamp: timestamp,
  });
  const docSnap = await getDoc(docRef);
  return {...docSnap.data(), id: docSnap.id} as IFilm;
}

export { getFilmsApi, likeFilmApi, addFilmApi, removeFilmApi, editFilmApi };

import { useEffect } from "react";
import { useDispatch } from "../../services/store";
import { fetchCharacters } from "../../services/thunk/characters";
import { Header } from "../header/header";
import { Route, Routes, useLocation } from "react-router-dom";
import { Welcome } from "../welcome/welcome";
import styles from './app.module.scss';
import { Products } from "../../pages/products";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route index element={<Welcome/>}/>
          <Route path="/products" element={<Products/>}/>
        </Route>
      </Routes>
    </div>
  )
}


export {App};

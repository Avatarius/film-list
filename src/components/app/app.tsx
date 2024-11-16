import { useEffect } from "react";
import { useDispatch } from "../../services/store";
import { Header } from "../header/header";
import { Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import { Welcome } from "../welcome/welcome";
import styles from "./app.module.scss";
import { Products } from "../../pages/products/products";
import { fetchFilms } from "../../services/thunk/films";
import { Modal } from "../modal/modal";
import { ProductInfo } from "../productInfo/productInfo";
import { useSelector } from "../../services/store";
import { selectFilmById } from "../../services/slices/films";
import { ProductAdd } from "../productAdd/productAdd";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const backgroundLocation = location.state?.backgroundLocation;
  const currentFilm = useSelector((state) => selectFilmById(state, location.state?.id));
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchFilms());
  }, []);
  return (
    <div className={styles.container}>
      <Routes location={backgroundLocation || location}>
        <Route path="/" element={<Header />}>
          <Route index element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<div></div>} />
          <Route path="/create-product" element={<div>gdfgfd</div>} />
        </Route>
      </Routes>
      {backgroundLocation && (
        <Routes>
          <Route path="/products/:id" element={<Modal onClose={() => navigate('/products')}><ProductInfo film={currentFilm} isCard={false}/></Modal>} />
          <Route path="/create-product" element={<Modal onClose={() => navigate('/products')}><ProductAdd/></Modal>}/>
        </Routes>
      )}
    </div>
  );
}

export { App };

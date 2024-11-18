import { useEffect, useState } from "react";
import { Header } from "../header/header";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Welcome } from "../../pages/welcome/welcome";
import styles from "./app.module.scss";
import { Products } from "../../pages/products/products";
import { Modal } from "../modal/modal";
import { ProductInfo } from "../productInfo/productInfo";
import { useDispatch, useSelector } from "../../services/store";
import { selectFilmById } from "../../services/slices/films";
import { ProductAdd } from "../productAdd/productAdd";
import { IFormData } from "../../utils/types";
import { NotFound } from "../../pages/notFound/notFound";
import { ProductEdit } from "../productEdit/productEdit";
import { Details } from "../../pages/details/details";
import { fetchFilmsThunk } from "../../services/thunk/films";

function App() {
  const location = useLocation();
  const backgroundLocation = location.state?.backgroundLocation;
  const dispatch = useDispatch();
  const currentFilm = useSelector((state) =>
    selectFilmById(state, location.state?.id)
  );
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchFilmsThunk());
  }, [])

  const [newFormData, setNewFormData] = useState<IFormData>({
    name: "",
    nameOrig: "",
    poster: "",
    year: "",
    country: "",
    description: "",
  });
  const [editFormData, setEditFormData] = useState<IFormData>({
    name: "",
    nameOrig: "",
    poster: "",
    year: "",
    country: "",
    description: "",
  });

  return (
    <div className={styles.container}>
      <Routes location={backgroundLocation || location}>
        <Route path="/" element={<Header />}>
          <Route path="*" element={<NotFound />} />
          <Route index element={<Welcome />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Details><ProductInfo film={currentFilm} isCard={false} /></Details>} />
          <Route path="/products/edit/:id" element={<Details><ProductEdit/></Details>} />
          <Route path="/create-product" element={<Details><ProductAdd formData={newFormData} setFormData={setNewFormData} /></Details>} />
        </Route>
      </Routes>
      {backgroundLocation && (
        <Routes>
          <Route
            path="/products/:id"
            element={
              <Modal onClose={() => navigate("/products")}>
                <ProductInfo film={currentFilm} isCard={false} />
              </Modal>
            }
          />
          <Route
            path="/products/edit/:id"
            element={
              <Modal onClose={() => navigate("/products")}>
                <ProductEdit/>
              </Modal>
            }
          />
          <Route
            path="/create-product"
            element={
              <Modal onClose={() => navigate("/products")}>
                <ProductAdd formData={newFormData} setFormData={setNewFormData} />
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
}

export { App };

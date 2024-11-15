import { createSlice } from "@reduxjs/toolkit";
import { fetchFilms, updateFilm } from "../thunk/films";
import { IFilm } from "../../utils/types";

interface IFilmsState {
  films: IFilm[];
  isLoading: boolean;
}

const initialState: IFilmsState = {
  films: [],
  isLoading: false,
};

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    removeFilm: (state) => {

    },
    likeFilm: (state) => {

    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.films = action.payload;
      })
      .addCase(fetchFilms.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateFilm.fulfilled, (state, action) => {
        const {id, isFavorite} = action.payload;
        const item = state.films.find(item => item.id === id);
        if (!item) return;
        item.isFavorite = isFavorite;
      })
  },
  selectors: {
    selectFilms: (state) => state.films,
    selectIsLoading: (state) => state.isLoading,
  },
});

const { selectFilms, selectIsLoading } = filmsSlice.selectors;
const {removeFilm, likeFilm} = filmsSlice.actions;

export { filmsSlice, selectFilms, selectIsLoading };

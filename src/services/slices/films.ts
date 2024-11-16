import { createSlice } from "@reduxjs/toolkit";
import { addNewFilm, fetchFilms, updateFilm } from "../thunk/films";
import { FilterType, IFilm } from "../../utils/types";

interface IFilmsState {
  films: IFilm[];
  filter: FilterType;
  isLoading: boolean;
}

const initialState: IFilmsState = {
  films: [],
  filter: FilterType.ALL,
  isLoading: false,
};

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    removeFilm: (state) => {},
    likeFilm: (state) => {},
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
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
        const { id, isFavorite } = action.payload;
        const item = state.films.find((item) => item.id === id);
        if (!item) return;
        item.isFavorite = isFavorite;
      })
  },
  selectors: {
    selectAllFilms: (state) => state.films,
    selectFavoriteFilms: (state) =>
      state.films.filter((film) => film.isFavorite),
    selectFilmById: (state, id) => state.films.find((film) => film.id === id) ?? null,
    selectIsLoading: (state) => state.isLoading,
    selectFilter: (state) => state.filter,
  },
});

const {
  selectAllFilms,
  selectFavoriteFilms,
  selectFilmById,
  selectIsLoading,
  selectFilter,
} = filmsSlice.selectors;
const { removeFilm, likeFilm, setFilter } = filmsSlice.actions;

export {
  filmsSlice,
  setFilter,
  selectAllFilms,
  selectFavoriteFilms,
  selectFilmById,
  selectIsLoading,
  selectFilter,
};

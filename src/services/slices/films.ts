import { createSlice } from "@reduxjs/toolkit";
import {
  addNewFilmThunk,
  editFilmThunk,
  fetchFilmsThunk,
  likeFilmThunk,
  removeFilmThunk,
} from "../thunk/films";
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
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFilmsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.films = [
          ...action.payload.sort(
            (a, b) => b.timestamp.seconds - a.timestamp.seconds
          ),
        ];
      })
      .addCase(fetchFilmsThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addNewFilmThunk.fulfilled, (state, action) => {
        const newFilm = action.payload;
        state.films = [newFilm, ...state.films];
      })
      .addCase(removeFilmThunk.fulfilled, (state, action) => {
        const id = action.payload;
        state.films = state.films.filter((item) => item.id !== id);
      })
      .addCase(editFilmThunk.fulfilled, (state, action) => {
        const updatedFilm = action.payload;
        state.films = state.films.map((item) => {
          if (item.id === updatedFilm.id) {
            return updatedFilm;
          } else {
            return item;
          }
        });
      })
      .addCase(likeFilmThunk.fulfilled, (state, action) => {
        const id = action.payload;
        const item = state.films.find((item) => item.id === id);
        if (!item) return;
        item.isFavorite = !item.isFavorite;
      });
  },
  selectors: {
    selectAllFilms: (state) => state.films,
    selectFavoriteFilms: (state) =>
      state.films.filter((film) => film.isFavorite),
    selectFilmById: (state, id) =>
      state.films.find((film) => film.id === id) ?? null,
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
const { setFilter } = filmsSlice.actions;

export {
  filmsSlice,
  setFilter,
  selectAllFilms,
  selectFavoriteFilms,
  selectFilmById,
  selectIsLoading,
  selectFilter,
};

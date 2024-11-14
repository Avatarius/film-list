import { createSlice } from "@reduxjs/toolkit";
import { fetchFilms } from "../thunk/films";
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
  reducers: {},
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
      });
  },
  selectors: {
    selectFilms: (state) => state.films,
    selectIsLoading: (state) => state.isLoading,
  },
});

const { selectFilms, selectIsLoading } = filmsSlice.selectors;

export { filmsSlice, selectFilms, selectIsLoading };

import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFilms, likeFilm } from "../../utils/api";
import { IFilm, UpdateFilm } from "../../utils/types";

const fetchFilms = createAsyncThunk("films/fetch", async () => getFilms());

const updateFilm = createAsyncThunk(
  "films/like",
  async ({id, isFavorite}: UpdateFilm) => likeFilm(id, isFavorite)
);

export { fetchFilms, updateFilm };

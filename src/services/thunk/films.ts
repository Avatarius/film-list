import { createAsyncThunk } from "@reduxjs/toolkit";
import { addFilmApi, getFilms, likeFilmApi, removeFilmApi } from "../../utils/api";
import {INewFilm, UpdateFilm } from "../../utils/types";

const fetchFilms = createAsyncThunk("films/fetch", async () => getFilms());

const updateFilm = createAsyncThunk(
  "films/like",
  async ({ id, isFavorite }: UpdateFilm) => likeFilmApi(id, isFavorite)
);

const addNewFilm = createAsyncThunk("films/add", async (film: INewFilm) =>
  addFilmApi(film)
);

const removeFilm = createAsyncThunk('films/remove', async (id: string) => {
  removeFilmApi(id);
})

export { fetchFilms, updateFilm, addNewFilm, removeFilm };

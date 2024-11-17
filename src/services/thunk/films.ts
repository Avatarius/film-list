import { createAsyncThunk } from "@reduxjs/toolkit";
import { addFilmApi, editFilmApi, getFilmsApi, likeFilmApi, removeFilmApi } from "../../utils/api";
import {EditFilm, INewFilm, LikeFilm } from "../../utils/types";

const fetchFilmsThunk = createAsyncThunk("films/fetch", async () => getFilmsApi());

const likeFilmThunk = createAsyncThunk(
  "films/like",
  async ({ id, isFavorite }: LikeFilm) => likeFilmApi(id, isFavorite)
);

const addNewFilmThunk = createAsyncThunk("films/add", async (film: INewFilm) =>
  addFilmApi(film)
);

const removeFilmThunk = createAsyncThunk('films/remove', async (id: string) =>
  removeFilmApi(id)
);

const editFilmThunk = createAsyncThunk('films/edit', async ({id, updatedFilm}: EditFilm) => editFilmApi(id, updatedFilm))


export { fetchFilmsThunk, likeFilmThunk, addNewFilmThunk, removeFilmThunk, editFilmThunk };

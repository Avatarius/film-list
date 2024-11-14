import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFilms } from "../../utils/api";


const fetchFilms = createAsyncThunk('films/fetch', async () => getFilms());


export {fetchFilms};

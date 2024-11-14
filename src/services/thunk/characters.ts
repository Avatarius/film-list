import { getCharacters } from "../../utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchCharacters = createAsyncThunk("characters/fetch", async () =>
  getCharacters()
);

export { fetchCharacters };

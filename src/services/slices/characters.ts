//https://api.disneyapi.dev/character
import { createSlice } from "@reduxjs/toolkit";
import { ICharacter } from "../../utils/types";
import { fetchCharacters } from "../thunk/characters";
import { getRandomArrayItems } from "../../utils/utils";

interface ICharactersState {
  characters: ICharacter[];
  isLoading: boolean;
}

const initialState: ICharactersState = {
  characters: [],
  isLoading: false,
};

const charactersSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.isLoading = false;
        const array = action.payload.data;
        const data: ICharacter[] =
          array.length > 10 ? getRandomArrayItems(array, 10) : array;
        state.characters = data.map((item) => ({
          name: item.name,
          imageUrl: item.imageUrl,
          films: item.films,
          shortFilms: item.shortFilms,
          tvShows: item.tvShows,
          videoGames: item.videoGames,
        }));
      })
      .addCase(fetchCharacters.rejected, (state) => {
        state.isLoading = false;
      });
  },
  selectors: {
    selectCharacters: (state) => state.characters,
    selectIsLoading: (state) => state.isLoading,
  },
});

const { selectCharacters, selectIsLoading } = charactersSlice.selectors;

export { charactersSlice, selectCharacters, selectIsLoading };

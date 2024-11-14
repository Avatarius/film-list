interface ICharacter {
  name: string;
  imageUrl: string;
  films: string[];
  shortFilms: string[];
  tvShows: string[];
  videoGames: string[];
}

interface IFilm {
  id: string;
  name: string;
  nameOrig: string;
  description: string;
  year: number;
  country: string;
  poster: string;
}

export type { ICharacter , IFilm };

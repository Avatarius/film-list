interface IFilm {
  id: string;
  name: string;
  nameOrig: string;
  description: string;
  year: number;
  country: string;
  poster: string;
  isFavorite: boolean;
}

type UpdateFilm = Pick<IFilm, 'id' | 'isFavorite'>;

enum Filter {
  ALL,
  FAVORITE
}

export type {IFilm, UpdateFilm };

export {Filter};

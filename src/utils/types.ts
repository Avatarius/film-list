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

interface IFormData extends Omit<IFilm, 'year' | 'id' | 'isFavorite'> {
  year: string;
}

type INewFilm = Omit<IFilm, 'id'> ;

type UpdateFilm = Pick<IFilm, 'id' | 'isFavorite'>

enum FilterType {
  ALL,
  FAVORITE
}

export type {IFilm, INewFilm, UpdateFilm, IFormData };

export {FilterType};

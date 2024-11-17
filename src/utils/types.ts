interface IFilm {
  id: string;
  name: string;
  nameOrig: string;
  description: string;
  year: number;
  country: string;
  poster: string;
  isFavorite: boolean;
  timestamp: {
    seconds: number;
  };
}

interface IFormData
  extends Omit<IFilm, "year" | "id" | "isFavorite" | "timestamp"> {
  year: string;
}

type INewFilm = Omit<IFilm, "id" | "timestamp">;

type LikeFilm = Pick<IFilm, "id" | "isFavorite">;

type EditFilm = {
  id: string;
  updatedFilm: INewFilm;
};

enum FilterType {
  ALL,
  FAVORITE,
}

export type { IFilm, INewFilm, LikeFilm, IFormData, EditFilm };

export { FilterType };

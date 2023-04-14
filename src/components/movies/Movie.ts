import { Review } from "../reviews/Review";

export interface Movie {
    id: string;
    imdbId: string;
    filmwebId: string;
    title: string;
    releaseDate: Date;
    trailerLink: string;
    poster: string;
    genres: string[];
    backdrops: string[];
    reviews: Review[];
}

export function movieRespToMovieItem(movie: any): Movie {
    return {
        id: movie.id,
        imdbId: movie.imdbId,
        filmwebId: movie.filmwebId,
        title: movie.title,
        releaseDate: new Date(movie.releaseDate),
        trailerLink: movie.trailerLink,
        poster: movie.poster,
        genres: movie.genres,
        backdrops: movie.backdrops,
        reviews: movie.reviews
    };
};

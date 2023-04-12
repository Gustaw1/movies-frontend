import { Movie } from "../movies/Movie"
import { Movies } from "../movies/MoviesRenderer";

export const HomePage = (props: { movies: Movie[] }) => {
    return (
        <>
            <Movies movies={props.movies} />
        </>
    );

}
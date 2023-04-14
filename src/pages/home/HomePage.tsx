import { Movie } from "../../components/movies/Movie"
import { Movies } from "../../components/movies/MoviesRenderer";

export const HomePage = (props: { movies: Movie[] }) => {
    return (
        <>
            <Movies movies={props.movies} />
        </>
    );

}
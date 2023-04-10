import { Movie } from "../movies/Movie"
import { Movies } from "../movies/Movies";

export const Home = (props: { movies: Movie[] }) => {
    return (
        <>
            <Movies movies={props.movies} />
        </>
    );

}
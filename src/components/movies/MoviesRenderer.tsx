import Carousel from 'react-material-ui-carousel';
import { Movie } from './Movie';
import { Paper } from '@mui/material';
import React from 'react';
import './Movies.css';

export const Movies = (props: { movies: Movie[] }) => {

    const movies = props.movies;

    return (
        <>
            <Carousel className='movie-carousel-container'>
                {movies.map((movie, idx) => {
                    return (
                        <React.Fragment key={idx} >
                            <Paper>
                                <div className='movie-card-container' >
                                    <div className='movie-card' style={{ backgroundImage: `url(${movie.backdrops[0]})` }}>
                                        <div className='movie-detail'>
                                            <div className='movie-poster'>
                                                <img src={movie.poster} alt='' />
                                            </div>
                                            <div className='movie-title'>
                                                <h4>{movie.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        </React.Fragment >
                    );
                }
                )}
            </Carousel>
        </>
    );
}

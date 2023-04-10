import { useEffect, useState } from 'react';
import './App.css';
import api from './api/axiosConfig';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Movie, movieRespToMovieItem } from './components/movies/Movie';

function App() {

  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    try {
      const response = await api.get("movies");
      if (response && response.data) {
        const moviesResp: Movie[] = response?.data?.map((resp: any) => movieRespToMovieItem(resp));
        setMovies(moviesResp);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home movies={movies} />}>

          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

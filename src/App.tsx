import { useEffect, useState } from 'react';
import './App.css';
import api from './api/axiosConfig';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './components/home/HomePage';
import { Movie, movieRespToMovieItem } from './components/movies/Movie';
import { Header } from './components/header/Header';

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
      <Header />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<HomePage movies={movies} />}>

          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

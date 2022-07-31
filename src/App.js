import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import MovieList from './MovieList'
import { Container } from "react-bootstrap"
import axios from 'axios';
import { Routes, Route } from "react-router-dom"
function App() {

  const [movies, setMovies] = useState([]);
  const [resData, setResData] = useState(null);
  const [numberOfPages, setNumberOfPages] = useState();

  async function getAllMovies() {
    const  res  = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b9bdb09fc05c6f78ab2de960f7cc874e`)
    let results = res.data.results
    console.log(results)
    setMovies(results)
    setNumberOfPages(res.data.total_pages)
  }
  async function currentPage(page) {
    const  {data}  = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b9bdb09fc05c6f78ab2de960f7cc874e&page=${page}`)
    let results = data.results
    setMovies(results)
  }
  async function searchMovies(comingValue) {
    if (comingValue === "") {
      getAllMovies()
    } else {
      const res= await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b9bdb09fc05c6f78ab2de960f7cc874e&language=en-US&page=all&include_adult=false&query=${comingValue}`)
      setMovies(res.data.results)
      setNumberOfPages(res.data.total_pages)
    }

  }


  useEffect(() => {
    getAllMovies()
  }, [])

  return (
    <div className="color_body">
      <Navbar searchMovies={searchMovies} />
      <Container>
      <MovieList movies={movies}  numberOfPages={numberOfPages} currentPage={currentPage}/>

      </Container>

    </div>
  );
}

export default App;
// https://api.themoviedb.org/3/movie/popular?api_key=b9bdb09fc05c6f78ab2de960f7cc874e
// https://api.themoviedb.org/3/search/movie?api_key=b9bdb09fc05c6f78ab2de960f7cc874e&language=en-US&page=all&include_adult=false&query=
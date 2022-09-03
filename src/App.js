import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from 'axios';
import MovieCard from "./components/MovieCard"
import Movie from "./components/Movie"
import HomePage from "./components/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [movies, SetMovies] = useState([])
  const fetchMovies = async()=>{
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://api.themoviedb.org/3/discover/movie?api_key=4080a61053ad33720ccc2d80e00e74e3',
      headers: { 
        'Authorization': 'Bearer 4080a61053ad33720ccc2d80e00e74e3'
      }
    };
    
    const {data: {results}} = await axios(config)
    SetMovies(results)
  }

  useEffect(()=>{
    fetchMovies()
  }, [])
  
  const renderMovies=() =>(
    movies.map(movie=>(
      
      <MovieCard
        key={movie.id}
        movie = {movie}
      />
    ))
  )
  
  return (
    <BrowserRouter>
      <Routes>
        
          <Route exact path="/" element={
            <div className="App">
            <h1>Hello World</h1>
            <div className="container">
              <div className='row'>{renderMovies()}</div>            
            </div>
          </div>
          }/>       
          <Route path="/movie/:id" element={<Movie/>} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

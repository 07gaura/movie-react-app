import React from "react"
import { useParams } from "react-router-dom"
import {useEffect, useState} from "react";
import axios from 'axios';
import MovieDetail from "./MovieDetail"
import MovieCard from "./MovieCard";
const Movie=()=>{
    const {id} = useParams()
    const [movies, SetMovies] = useState({})
    const [recommendM, SetRecommendM]=useState([])
    //const employees = [  {    "poster_path": "https://image.tmdb.org/t/p/w500//hfGWxrtbRnxg19ouEYBtQKtMZcN.jpg",    "title": "The Beyond"  },  {    "poster_path": "https://image.tmdb.org/t/p/w500//rFIjEbUbsiMwYV0MBGaUTdYlJGa.jpg",    "title": "Firefox"  },  {    "poster_path": "https://image.tmdb.org/t/p/w500//hXFXIc6F4NXI5emWCKcUwqEPjIZ.jpg",    "title": "The Bounty"  },  {    "poster_path": "https://image.tmdb.org/t/p/w500//6esL8UH2sXXqbfbaV6bFEUBCDOr.jpg",    "title": "The Lovers"  },  {    "poster_path": "https://image.tmdb.org/t/p/w500//fYVQRcgnOv998bKEplzrD3faGgt.jpg",    "title": "The Last of the Mohicans"  }]
    let displaydata
    const fetchMovies = async()=>{
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer 4080a61053ad33720ccc2d80e00e74e3");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };
        await fetch("https://api.themoviedb.org/3/movie/"+id+"?api_key=4080a61053ad33720ccc2d80e00e74e3", requestOptions)
        .then(response => response.json())
        .then(result => SetMovies(result))
        .catch(error => console.log('error', error));
    }

    const recommendMovies = async()=>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        await fetch("http://127.0.0.1:5000/recommend/"+id, requestOptions)
        .then(response => response.json())
        .then(result => SetRecommendM(result))
        .catch(error => console.log('error', error));
        
    }
    useEffect(()=>{
        recommendMovies()
        fetchMovies()
        
      }, [])

    const renderMovies=()=>(
        <MovieDetail movie={movies} />
    )
    const res=[]
    const RecommendMovies=() =>(
        recommendM.map(movie=>(
          
          <MovieCard
            key={movie.id}
            movie = {movie}
          />
        ))
      )
    
    
        
      
    return (
        <div>
            <div className="container-fluid">       
                {renderMovies()} 
            </div>
            <div className="container-fluid custom-cont">   
            <div className='row'>{RecommendMovies()}</div> 
            
            </div>
        </div>
            
            
        
    )
}
export default Movie
import {Link} from "react-router-dom"
import React from "react"
const MovieCard=({movie})=>{
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w500"
    return (
            
            <div className="col-md-2 h-25 custom-col">
            <img src={`${IMAGE_PATH}${movie.poster_path}`}alt=""/>
            <div className="custom-class">
            <span class="badge bg-warning text-dark">{movie.vote_average}</span><br/>
            <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
            </div>      
            
            </div>
        
    )
}
export default MovieCard
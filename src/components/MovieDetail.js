import {Link} from "react-router-dom"
import React from "react"
const MovieDetail=({movie})=>{
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w500"
    return (
            
            <div className="col-md-12 h-25 custom-class1">
            <img className="mw-100" src={`${IMAGE_PATH}${movie.poster_path}`}alt=""/>
            <div className="custom-inner-class1">
            <span class="badge bg-warning text-dark">{movie.vote_average}</span><br/>
             <p className="p1">{movie.title}</p>
             <p className="p2">{movie.overview}</p>
            </div>      
            
            </div>
        
    )
}
export default MovieDetail
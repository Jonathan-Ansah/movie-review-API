import React,{useState, useEffect} from 'react';
import axios from 'axios';

const MovieReview = () => {
    const [movies, setMovies]= useState([])

    useEffect(()=>{
        
        axios.get("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=PJJkp08mCQbqC3NcW2SSNKP2ieBQpItr")
        .then((res)=>{
            console.log(res);
            setMovies(res.data.results)
        })
        .catch((err)=>{
            console.log(err);
        })
    })
    
    return (
        <div>
            <h1>Movie Review</h1>
            <hr/>
                 {movies.map((movie)=>(
                        <div>
                            <h1>Headline:{movie.headline}</h1>
                            <h2>Title:{movie.display_title}</h2>
                            <h3>Byline:{movie.byline}</h3>
                            <h4>Critic Pick:{movie.critics_pick}</h4>
                            <hr/>
                        </div>
                        
                    ))}
        </div>
    );
}

export default MovieReview;

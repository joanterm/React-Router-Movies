import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from "react-router-dom"

import SavedList from './Movies/SavedList';
import Movie from "./Movies/Movie"
import MovieList from "./Movies/MovieList"

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          console.log(response.data)
          setMovieList(response.data)
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <Route path="/">
        <SavedList  list={[ /* This is stretch */]} />
      </Route>

      {/* <div>Replace this Div with your Routes</div> */}


      <Switch>
        <Route exact path="/"><MovieList movies={movieList}/></Route> 
        <Route path={"/movies/:id"}><Movie /></Route>    
      </Switch>
    </div>
  );
}

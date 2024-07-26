import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Heading from "./components/Heading";
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [initialLoad, setInitialLoad] = useState(true);
  const [searchItem,setSearchItem]=useState("")

  const fetchMovies = async (searchTerm='avengers') => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=22520bb8`);
      const result = await response.json()
      if (result.Search) {
        const detailedMovies = await Promise.all(result.Search.map(async (movie) => {
          const movieResponse = await fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=22520bb8`);
          return movieResponse.json();
        }));
        setMovies(detailedMovies);
      }else{
        setMovies([]);
      }
    }
    catch (error) {
      console.error("Some error occured", error)
    }
  };


  const handleSubmit = () => {
    fetchMovies(searchItem);
  }


  useEffect(()=>{
    if(initialLoad){
      fetchMovies();
      setInitialLoad(false);
    }
  },[initialLoad])

return (
  <>
    <Heading
       searchItem={searchItem}
       setSearchItem={setSearchItem}
       handleSubmit={handleSubmit} 
    />
    <Movie movies={movies}/>
  </>
);
}

export default App;

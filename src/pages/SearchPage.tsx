// import './SearchPage.css'
// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import Carousel from '../components/Carousel/Carousel';

// const searchURL: string = import.meta.env.VITE_SEARCH;
// const apiKey: string = import.meta.env.VITE_API_KEY;

// interface Movie {
//   id: number;
//   title: string;
// }

// const SearchPage = () => {
//   const [searchParams] = useSearchParams();

//   const [movies, setMovies] = useState<Movie[]>([]); 
//   const query: string | null = searchParams.get("q");

//   const getSearchedMovies = async (url: string) => {
//     const res = await fetch(url);
//     const data: { results: Movie[] } = await res.json(); 
//     setMovies(data.results);
//   };

//   useEffect(() => {
//     if (query) {
//       const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
//       getSearchedMovies(searchWithQueryURL);
//     }
//   }, [query]);

//   return (
   
     
//       <div className="container">
//         <h2 className="title">
//           Resultados para: <span className="query-text">{query}</span>
//         </h2>
//         <div className="movies-container">
//           {movies.length > 0 &&
//             movies.map((movie) => < Carousel key={movie.id} movie={movie} />)}
//         </div>
//       </div>
//   );
// };

// export default SearchPage;


import { useLocation } from 'react-router-dom';
import Search from '../components/Search/Search';
import Carousel from '../components/Carousel/Carousel';


const SearchPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q') || '';

  return (
    <div>
      <Search />
      <h2>Resultados para: {query}</h2>
      
      <h3>Filmes</h3>
      <Carousel endpoint={`/search/movie?query=${query}`} />

      <h3>Séries</h3>
      <Carousel endpoint={`/search/tv?query=${query}`} />

    </div>
  );
};

export default SearchPage;

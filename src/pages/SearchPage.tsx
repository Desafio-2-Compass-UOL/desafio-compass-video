// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// // import MovieCard from "../components/MovieCard";

// const searchURL = import.meta.env.VITE_SEARCH;
// const apiKey = import.meta.env.VITE_API_KEY;

// import "./MoviesGrid.css";

// const SearchPage = () => {
//   const [searchParams] = useSearchParams();

//   const [movies, setMovies] = useState([]);
//   const query = searchParams.get("q");

//   const getSearchedMovies = async (url) => {
//     const res = await fetch(url);
//     const data = await res.json();
//     setMovies(data.results);
//   };

//   useEffect(() => {
//     const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
//     getSearchedMovies(searchWithQueryURL);
//   }, [query]);

//   return (
//     <div className="container">
//       <h2 className="title">
//         Resultados para: <span className="query-text">{query}</span>
//       </h2>
//       <div className="movies-container">
//         {movies.length > 0 &&
//           movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
//       </div>
//     </div>
//   );
// };

// export default SearchPage;
import './SearchPage.css'
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// import MovieCard from "../components/MovieCard";

const searchURL: string = import.meta.env.VITE_SEARCH;
const apiKey: string = import.meta.env.VITE_API_KEY;

interface Movie {
  id: number;
  // Define a tipagem das propriedades do objeto "movie" aqui.
  // title: string;
}

const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState<Movie[]>([]); // Definir o tipo do estado "movies" como um array de objetos Movie.
  const query: string | null = searchParams.get("q");

  const getSearchedMovies = async (url: string) => {
    const res = await fetch(url);
    const data: { results: Movie[] } = await res.json(); // Definir a estrutura do objeto de resposta.
    setMovies(data.results);
  };

  useEffect(() => {
    if (query) {
      const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
      getSearchedMovies(searchWithQueryURL);
    }
  }, [query]);

  return (
   
     
      <div className="container">
        <h2 className="title">
          Resultados para: <span className="query-text">{query}</span>
        </h2>
        <div className="movies-container">
          {movies.length > 0 &&
            movies.map((movie) => < /*MovieCard*/ key={movie.id} movie={movie} />)}
        </div>
      </div>
  );
};

export default SearchPage;



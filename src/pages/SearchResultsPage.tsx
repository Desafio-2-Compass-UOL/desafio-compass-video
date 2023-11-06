import './SearchResultsPage.css'

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

interface SearchResult {
  id: number;
  title: string;
  name: string;
  poster_path: string;
}

const SearchResultsPage = () => {
  const location = useLocation(); 
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q');

  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [noResults, setNoResults] = useState(false); 

  useEffect(() => {
    const BASE_URL = import.meta.env.VITE_SEARCH;
    const API_KEY = import.meta.env.VITE_API_KEY;

    const searchTMDB = async (query: string) => {
      try {
        const url =  `${BASE_URL}?${API_KEY}&query=${query}`;
        const response = await axios.get(url);
        const results = response.data.results;
        return results;
      } catch (error) {
        console.error('Erro na busca:', error);
        return [];
      }
    };

    if (query) {
      searchTMDB(query)
        .then((results) => {
          console.log('Resultados da pesquisa:', results);
          setSearchResults(results);

          if (results.length === 0) {
            setNoResults(true);
          } else {
            setNoResults(false);
          }
        })
        .catch((error) => {
          console.error('Erro na busca TMDB:', error);
          setSearchResults([]);
          setNoResults(true);
        });
    }
  }, [query]);

  return (
    <div>
      <div className='container-results'>
        <h2>Resultados para sua busca: <span className='query'>"{query}"</span></h2>
        {noResults ? (
          <p className='no-results'>Sem resultados</p>
        ) : (
          <div className="movies-container">
            {searchResults.map((result) => (
              <div key={result.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${result.poster_path}`}
                  alt={result.title || result.name} 
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;

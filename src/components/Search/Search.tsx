import './Search.css'

import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState('Tudo');
  const navigate = useNavigate();
  const categories = ['Tudo', 'Filmes', 'Coleções', 'Séries', 'Celebridades'];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/${category.toLowerCase()}?api_key=VITE_APY_KEY&query=${search}`
        );
        setData(response.data.results);
      } catch (error) {
        console.error('Erro na buscar:', error);
      }
    };

    fetchData();
  }, [category, search]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  const handleCategoryChange = (selectedCategory: string) => {
    setCategory(selectedCategory);
  };

  // const showSearchBar = () => {
  //   const search_bar_area: HTMLElement | null = document.getElementById("query-form");
  //   if (search_bar_area) {
  //     switch (search_bar_area.style.display) {
  //       case "none":
  //         search_bar_area.style.display = "block";
  //         break;
  //       case "block":
  //         search_bar_area.style.display = "none";
  //         break;
  //       default:
  //         search_bar_area.style.display = "none";
  //     }
  //   }
  // };

  return (
    <div className='buttonContainer'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Filmes, série ou celebridade"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          name='search'
        />
        <div>
          <select title='Movie' onChange={(e) => handleCategoryChange(e.target.value)}>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <button type='submit' id="query-form" className="search-form">
          <BiSearch className='icon' />
        </button>
        {/* <button type='submit' id="query-form" className="search-form" onClick={() => showSearchBar()}>
          <BiSearch className='icon' />
        </button> */}
        <button>
          <AiOutlineClose className='icon' />
        </button>
      </form>
    </div>
  );
};

export default Search;

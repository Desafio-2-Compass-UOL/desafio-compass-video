import './Search.css'

import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [search, setSearch] = useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [category, setCategory] = useState('Tudo');
  const navigate = useNavigate();
  const categories = ['Tudo', 'Filmes', 'Coleções', 'Séries', 'Celebridades'];
  // const [data, setData] = useState([]);
  const [showPrincipalButton, setShowPrincipalButton] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  const handleCategoryChange = (selectedCategory: string) => {
    setCategory(selectedCategory);
  };

  const showPrincipal = () => {
    setShowPrincipalButton(true);
  };

  const showButtonContainer = () => {
    setShowPrincipalButton(false);
  };

  return (
    <div>
      {showPrincipalButton ? (
        <button className='principal' onClick={showButtonContainer}>
          <BiSearch className='icon' />Buscar
        </button>
      ) : (
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
            <button className='closed' onClick={showPrincipal}>
              <AiOutlineClose className='icon' />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Search

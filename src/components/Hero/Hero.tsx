import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Hero.css';

interface HeroProps {
  property1: 'mobile' | 'default';
  movieId: number; // Adicione a propriedade movieId
}

interface MovieData {
  backdrop_path: string;
  title: string; // Adicione o nome
  overview: string; // Adicione o resumo
  release_date: string; // Adicione o ano de lançamento
  runtime: number; // Adicione a duração em minutos
  genres: { id: number; name: string }[]; // Adicione o gênero
}

const Hero: React.FC<HeroProps> = ({ property1, movieId }) => {
  const [movieData, setMovieData] = useState<MovieData | null>();
  const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGRlN2RjYWU5Y2NhZmViYjMwMGNiZmY1NThlZmExZiIsInN1YiI6IjY1NDNkNjQ2Mjg2NmZhMDEzOGE1NjhlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t6pN4cXFs_4TnjCtoWOllm4xJKZIYQWqHmxVksfEGTQ"; // Substitua pela sua chave de API do TMDb

  const [isStarSelected, setIsStarSelected] = useState(false);

  const favorite = <img src="/src/assets/favorite.svg" alt="Favorite" />

  const toggleStar = () => {
    setIsStarSelected(!isStarSelected);
  };

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`; // Consultar detalhes do filme por ID
        const options = {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        };

        const response = await axios.get(url, options);

        if (response.data) {
          setMovieData(response.data);
        }
      } catch (error) {
        console.debug('Erro ao consultar a TMDB API: ', error);
      }
    };

    fetchMovieData();
  }, [movieId]);

  const backdrop = movieData?.backdrop_path || 'https://placehold.co/600x400';

  const formatRuntime = (runtime: number) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}min`;
  };

  const getYear = (releaseDate: string) => {
    const date = new Date(releaseDate);
    return date.getFullYear();
  };

  return (
    <div className={`hero ${property1}`}>
      <div className="hero-content">
        <img className="image-hero" alt="Backdrop" src={`https://image.tmdb.org/t/p/original${backdrop}`} />
        {movieData && (
          <div className="movie-info">
            <h2 style={{ width: '719px', color: '#F9F9F9', fontSize: '44px', fontFamily: 'Work Sans', fontWeight: 700, wordWrap: 'break-word' }}>
              {movieData.title}
            </h2>

            <p style={{ color: '#F9F9F9', fontSize: '100%', fontFamily: 'Work Sans', fontWeight: 400, lineHeight: '24px', wordWrap: 'break-word' }}>
              {getYear(movieData.release_date)} • {formatRuntime(movieData.runtime)}
            </p>

            <p style={{ width: '253px', height: '16px', color: '#F9F9F9', fontSize: '12px', fontFamily: 'Work Sans', fontWeight: 400, wordWrap: 'break-word' }}>
              {movieData.genres.map((genre) => genre.name).join(', ')}
            </p>

            <p style={{ width: '719px', color: '#F9F9F9', fontSize: '20px', fontFamily: 'Work Sans', fontWeight: 400, lineHeight: '30px', wordWrap: 'break-word' }}>
              {movieData.overview}
            </p>

            <div className="buttons">
              <button className="button" style={{ textAlign: 'center', fontSize: '16px', fontFamily: 'Work Sans', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2.24px', wordWrap: 'break-word' }}>
                VER AGORA
              </button>

              <button className="button" style={{ textAlign: 'center', fontSize: '16px', fontFamily: 'Work Sans', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2.24px', wordWrap: 'break-word' }}>
                MAIS INFORMAÇÕES
              </button>

              <button className="icon-button">
                <div className="icon">
                  <div className="icon-inner"><b>+</b></div>
                </div>
              </button>

              <button className="star-button" onClick={toggleStar}>
                <div className="star">
                {isStarSelected ? '⩗' : '★'}
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;

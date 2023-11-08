import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Hero.css';

interface HeroProps {
  property1?: 'mobile' | 'default';
  movieId?: number;
  contentType?: 'movie' | 'tv';
}

interface MovieData {
  backdrop_path: string;
  title: string;
  overview: string;
  release_date: string;
  runtime: number;
  genres: { id: number; name: string }[];
}

interface TVData {
  backdrop_path: string;
  name: string;
  overview: string;
  first_air_date: string;
  number_of_seasons: number; 
  genres: { id: number; name: string }[];
}

const Hero: React.FC<HeroProps> = ({ property1, movieId, contentType }) => {
  const [contentData, setContentData] = useState<MovieData | TVData | null>();
  const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGRlN2RjYWU5Y2NhZmViYjMwMGNiZmY1NThlZmExZiIsInN1YiI6IjY1NDNkNjQ2Mjg2NmZhMDEzOGE1NjhlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t6pN4cXFs_4TnjCtoWOllm4xJKZIYQWqHmxVksfEGTQ";

  const [isStarSelected, setIsStarSelected] = useState(false);

  const toggleStar = () => {
    setIsStarSelected(!isStarSelected);
  };

  useEffect(() => {
    const fetchContentData = async () => {
      try {
        const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
        const tvShowUrl = `https://api.themoviedb.org/3/tv/${movieId}?language=en-US`;

        const options = {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        };

        if (contentType === 'movie') {
          const response = await axios.get(movieUrl, options);
          if (response.data) {
            setContentData(response.data);
          }
        } else if (contentType === 'tv') {
          const response = await axios.get(tvShowUrl, options);
          if (response.data) {
            setContentData(response.data);
          }
        }
      } catch (error) {
        console.debug('Erro ao consultar a TMDB API: ', error);
      }
    };

    fetchContentData();
  }, [movieId, contentType]);

  const backdrop = contentData?.backdrop_path || 'https://placehold.co/600x400';

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
        {contentData && (
          <div className="movie-info">
            <h2 style={{ width: '719px', color: '#F9F9F9', fontSize: '44px', fontFamily: 'Work Sans', fontWeight: 700, wordWrap: 'break-word' }}>
              {contentType === 'movie' ? (contentData as MovieData).title : (contentData as TVData).name}
            </h2>

            <p style={{ color: '#F9F9F9', fontSize: '100%', fontFamily: 'Work Sans', fontWeight: 400, lineHeight: '24px', wordWrap: 'break-word' }}>
              {contentType === 'movie'
                ? `${getYear((contentData as MovieData).release_date)} • ${formatRuntime((contentData as MovieData).runtime)}`
                : `${(contentData as TVData).number_of_seasons} Temporadas`
              }
            </p>

            <p style={{ width: '253px', height: '16px', color: '#F9F9F9', fontSize: '12px', fontFamily: 'Work Sans', fontWeight: 400, wordWrap: 'break-word' }}>
              {contentData.genres.map((genre) => genre.name).join(', ')}
            </p>

            <p style={{ width: '719px', color: '#F9F9F9', fontSize: '20px', fontFamily: 'Work Sans', fontWeight: 400, lineHeight: '30px', wordWrap: 'break-word' }}>
              {contentData.overview}
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

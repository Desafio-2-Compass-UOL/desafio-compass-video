import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Hero.css";

interface HeroProps {
  property1: "mobile" | "default";
}

interface MovieData {
  backdrop_path: string;
}

const Hero: React.FC<HeroProps> = ({ property1 }) => {
  const [movieData, setMovieData] = useState<MovieData | null>();
  const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGRlN2RjYWU5Y2NhZmViYjMwMGNiZmY1NThlZmExZiIsInN1YiI6IjY1NDNkNjQ2Mjg2NmZhMDEzOGE1NjhlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t6pN4cXFs_4TnjCtoWOllm4xJKZIYQWqHmxVksfEGTQ";
  const movieId = 507089;

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
    const options = {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    };

    axios
      .get(url, options)
      .then((res) => {
        setMovieData(res.data);
      })
      .catch((error) => {
        console.debug("Erro ao consultar a TMDB API: ", error);
      });
  }, [movieId]);

  const backdrop = movieData?.backdrop_path || "https://placehold.co/600x400";

  return (
    <div className={`hero ${property1}`}>
      <div>
        <img className="image-hero" alt="Backdrop" src={`https://image.tmdb.org/t/p/original${backdrop}`}/>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Carousel.css";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

export interface Movie {
  id: number;
  name: string;
  poster: string;
}

function convertToMovies(movies: any[]): Movie[] {
  const moviesConverted: Movie[] = [];

  movies.forEach((movie) => {
    const newMovie: Movie = {
      id: movie.id,
      name: movie.title,
      poster: movie.poster_path,
    };

    moviesConverted.push(newMovie);

    return moviesConverted;
  });

  return moviesConverted;
}

function Carousel() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const useEffectFunction = async () => {
      let response = undefined;

      try {
        const options = {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2QxNGM5MzMxMjBlYTc1ZGE1YWQwZjdlOTU1ZTkwYiIsInN1YiI6IjY1NDNkNjQ2Mjg2NmZhMDEzOGE1NjhlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ma_nMxeQmjxWhgIyzLGdUKCrdLf7eVx8HDYhLTDttLM",
          },
        };
        response = await axios.get<AxiosResponse<Movie[]>>(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          options
        );

        // console.log(response);
      } catch (error) {
        console.error("Deu merda");
      }

      const moviesConverted = convertToMovies(response?.data.results);

      setMovies(moviesConverted);
    };

    useEffectFunction();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key= {movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster}`} alt={movie.name} />
            <p>{movie.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;

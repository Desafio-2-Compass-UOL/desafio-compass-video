import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

import { useState, useEffect } from "react";
import axios from "axios";

interface Item {
  id: number;
  poster: string;
}

interface CarouselProps {
  type?: string;
  category?: string;
  collection?: string;
}

function convertToItems<T extends { id: number; poster_path: string }>(
  items: T[]
): Item[] {
  const itemsConverted: Item[] = [];
  items.map((item) => {
    const newItem: Item = { id: item.id, poster: item.poster_path };
    itemsConverted.push(newItem);
  });

  return itemsConverted;
}

function Carousel({ type, category, collection }: CarouselProps) {
  const [items, setItems] = useState<Item[]>([]);
  const apiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGRlN2RjYWU5Y2NhZmViYjMwMGNiZmY1NThlZmExZiIsInN1YiI6IjY1NDNkNjQ2Mjg2NmZhMDEzOGE1NjhlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t6pN4cXFs_4TnjCtoWOllm4xJKZIYQWqHmxVksfEGTQ";
  let url = "";

  if (collection) {
    url = `https://api.themoviedb.org/3/search/collection?query=${collection}&include_adult=false&language=en-US&page=1`;
  } else {
    url = `https://api.themoviedb.org/3/${type}/${category}?language=en-US&page=1`;
  }

  useEffect(() => {
    const options = {
      headers: {
        Authorization: `Bearer ${apiKey} `,
      },
    };
    axios
      .get(url, options)
      .then((res) => {
        const itemsConverted = convertToItems(res.data.results);
        setItems(itemsConverted);
      })
      .catch((error) => {
        console.debug("Erro ao consultar a TMDB API: ", error);
      });
  }, []);

  const settings = {
    variableWidth: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
          slidesToShow: 2,
          slidesToScroll: 1,
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
        {items.map((item) => {
          if (item.poster === null) {
            return;
          }
          return (
              <div className="slick-item" key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster}`}
                  alt="movie poster"
                />
              </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Carousel;

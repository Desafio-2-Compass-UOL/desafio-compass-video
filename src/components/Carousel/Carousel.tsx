import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "./Carousel.css";
import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

export interface Item {
  id: number;
  poster: string;
}

interface CarouselProps {
  endpoint: string;
}

function convertToItems(items: Item[]): Item[] {
  const itemsConverted: Item[] = [];

  items.forEach((item) => {
    const newItem: Item = {
      id: item.id,
      poster: item.poster_path,
    };

    itemsConverted.push(newItem);

    return itemsConverted;
  });
  
  return itemsConverted;
}

function Carousel({ endpoint }: CarouselProps) {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const useEffectFunction = async () => {
      let response = undefined;

      try {
        const options = {
          headers: {
            Authorization:
            'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWNjMjMzMDYxNjg1NzQyZTVkMDc4ZmI1MjM3MjdmMCIsInN1YiI6IjY1NDNkNjQ2Mjg2NmZhMDEzOGE1NjhlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BCgmJNLUK3enLKAhnFcnqHBw4KdG0AxKvNHDBwAZBUE',
          },
        };
        response = await axios.get<AxiosResponse<Item[]>> (
          'https://api.themoviedb.org' + endpoint,
          options
        );
          
      } catch (error) {
        console.error("Deu merda", error);
      }

      const itemsConverted = convertToItems(response?.data.results);

      setItems(itemsConverted);
    };

    useEffectFunction();
  }, [endpoint]);

  
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
        {items.map((item) => (
          <div key={item.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${item.poster}`} alt='movie poster' />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;

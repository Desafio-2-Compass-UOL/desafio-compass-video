import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import Hero from "../components/Hero/Hero";

interface CollectionItem {
  id?: number;
  poster?: string;
}

// interface CarouselCollectionProps {

// }

function convertToCollectionItems<
  T extends { id: number; poster_path: string }
>(collectionItems: T[]): CollectionItem[] {
  const collectionItemsConverted: CollectionItem[] = [];
  collectionItems.map((collectionItem) => {
    const newCollectionItem: CollectionItem = {
      id: collectionItem.id,
      poster: collectionItem.poster_path,
    };
    collectionItemsConverted.push(newCollectionItem);
  });

  return collectionItemsConverted;
}

function CollectionPage() {
  const { id } = useParams();

  const [collectionItems, setCollectionItems] = useState<CollectionItem[]>([]);

  const apiKey =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NGRlN2RjYWU5Y2NhZmViYjMwMGNiZmY1NThlZmExZiIsInN1YiI6IjY1NDNkNjQ2Mjg2NmZhMDEzOGE1NjhlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t6pN4cXFs_4TnjCtoWOllm4xJKZIYQWqHmxVksfEGTQ";
  const url = `https://api.themoviedb.org/3/collection/${id}?language=en-US`;

  useEffect(() => {
    const options = {
      headers: {
        Authorization: `Bearer ${apiKey} `,
      },
    };
    axios
      .get(url, options)
      .then((res) => {
        console.log("Data from API:", res.data);
        const collectionItemsConverted = convertToCollectionItems(
          res.data.parts
        );
        setCollectionItems(collectionItemsConverted);
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

  const uniqueCollectionItems = collectionItems.filter(
    (item, index, self) =>
      index ===
      self.findIndex((t) => t.id === item.id && t.poster === item.poster)
  );

  return (
    <section className="catalog">
      <div className="hero">
        <Hero property1="default" />
      </div>
      <div className="carousel">
        <Slider {...settings}>
          {uniqueCollectionItems.map((collectionItem) => {
            if (collectionItem.poster === null) {
              return;
            }

            return (
              <div className="slick-item" key={collectionItem.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${collectionItem.poster}`}
                  alt="movie poster"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default CollectionPage;

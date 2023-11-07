import Carousel from "../components/Carousel/Carousel";
import Hero from "../components/Hero/Hero";
import "./Home.css";

function Home() {
  return (
    <section className="catalog">
      <div className="hero">
        <Hero property1="default"/>
      </div>

      <div className="carousel">
        <p>Halloween Collection</p>
        <Carousel collection="halloween" />
      </div>

      <div className="carousel">
        <p>Séries em alta</p>
        <Carousel type="tv" category="popular" />
      </div>

      <div className="carousel">
        <p>Filmes em Alta</p>
        <Carousel type="movie" category="popular" />
      </div>

      <div className="carousel">
        <p>Novidades em filmes</p>
        <Carousel type="movie" category="upcoming" />
      </div>
    </section>
  );
}

export default Home;

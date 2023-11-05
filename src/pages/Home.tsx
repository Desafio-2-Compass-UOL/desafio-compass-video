import Carousel from "../components/Carousel/Carousel";
import "./Home.css";

function Home() {
  return (
    <section className="catalog">
      <img
        src="https://placehold.co/600x400"
        alt="imagem improvisada pra eu visualizar melhor a minha parte"
      />
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

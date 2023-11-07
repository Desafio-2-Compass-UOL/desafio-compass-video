import Carousel from "../components/Carousel/Carousel";
import Hero from "../components/Hero/Hero";

function MoviesPage() {
  return (
    <section className="catalog">
      <div className="hero">
        <Hero property1="default" />
      </div>

      <div className="carousel">
        <p>Melhores notas</p>
        <Carousel type="movie" category="top_rated" />
      </div>

      <div className="carousel">
        <p>Em breve</p>
        <Carousel type="movie" category="upcoming" />
      </div>

      <div className="carousel">
        <p>Populares</p>
        <Carousel type='tv' category="popular" />
      </div>

      <div className="carousel">
        <p>Em exibição</p>
        <Carousel type="movie" category="now_playing" />
      </div>

      
    </section>
  );
}

export default MoviesPage;

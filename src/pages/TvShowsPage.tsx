import Carousel from "../components/Carousel/Carousel";
import Hero from "../components/Hero/Hero";

function TvShowsPage() {
  return (
    <section className="catalog">
      <div className="hero">
        <Hero property1="default" contentType="tv" movieId={84958}/>
      </div>

      <div className="carousel">
        <p>Populares</p>
        <Carousel type="tv" category="popular" />
      </div>

      <div className="carousel">
        <p>Melhores notas</p>
        <Carousel type="tv" category="top_rated" />
      </div>

      <div className="carousel">
        <p>Em exibição hoje</p>
        <Carousel type='tv' category="airing_today" />
      </div>

      <div className="carousel">
        <p>Em exibição</p>
        <Carousel type="tv" category="on_the_air" />
      </div>

      
    </section>
  );
}

export default TvShowsPage;

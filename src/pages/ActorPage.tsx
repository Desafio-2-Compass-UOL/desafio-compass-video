// import Carousel from "../components/Carousel/Carousel";
import Carousel from "../components/Carousel/Carousel";
import Hero from "../components/Hero/Hero";

function ActorsPage() {
  return (
    <section className="catalog">
      <div className="hero">
        <Hero property1="default" />
      </div>

      <div className="carousel">
        <p></p>
        <Carousel type="person" category="popular" />
      </div>

    

      
    </section>
  );
}

export default ActorsPage;

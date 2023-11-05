import Carousel from "../components/Carousel/Carousel";

function Home() {
  return (
    <section className="home-catalog">
      <div className="popular-shows">
        <p>Séries em alta</p>
        <Carousel endpoint="/3/tv/popular?language=en-US&page=1" />
      </div>

      <div className="popular-movies">
        <p>Filmes em Alta</p>
        <Carousel endpoint={"/3/movie/popular?language=en-US&page=1"} />
      </div>
    </section>
  );
}

export default Home;

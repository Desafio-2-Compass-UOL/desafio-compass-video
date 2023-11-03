import Carousel from "../components/Carousel/Carousel";

function Home() {

    return (
        <section className="Home">
            <div className="popular-movies">
                <Carousel endpoint={'movie/popular?language=en-US&page=1'}/>
            </div>
            <div className="popular-shows">
                <Carousel endpoint={'tv/popular?language=en-US&page=1'}/>
            </div>
        </section>
    )
}

export default Home;
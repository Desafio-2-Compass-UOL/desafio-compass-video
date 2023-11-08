import { useParams } from "react-router-dom";
import Hero from "../components/Hero/Hero";

function SerieDetails() {
  const { id } = useParams();

  return (
    <section className="catalog">
      <div className="hero">
        <Hero property1="default" />
      </div>
      {id}
    </section>
  );
}

export default SerieDetails;

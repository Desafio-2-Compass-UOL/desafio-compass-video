import { useParams } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  return (
    <div>
      <span>{id}</span>
    </div>
  );
}

export default MovieDetails;

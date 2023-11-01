import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, imgsrc, poster_path, title, overview }) {
  return (
    <div>
      <img src={`${imgsrc}${poster_path}`} alt="" />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{overview}</p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  imgsrc: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Movie;

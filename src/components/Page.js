import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/Page.css";

function Movie({ id }) {
  return (
    <div className="movieBox">
      <h1>디테일 페이지</h1>
      <div>1234s</div>
      {/* <img className="movieImg" src={`${imgsrc}${poster_path}`} alt="" />
      <div>
        <h2 className="movieTitle">
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>
          {overview.length > 235 ? `${overview.slice(0, 235)}...` : overview}
        </p> */}
      {/* </div> */}
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

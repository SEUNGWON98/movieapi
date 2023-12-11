import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import "../styles/Home.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const imgsrc = "https://image.tmdb.org/t/p/w500/";
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=0da33e1534845c1687aa49230d4613ba&language=en-US&page=1`
      )
    ).json();
    setMovies(json.results);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);
  return (
    <div className="App">
      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <div>
          <div className="title">이번달 인기 영화</div>

          <div className="card_size">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                imgsrc={imgsrc}
                poster_path={movie.poster_path}
                title={movie.title}
                overview={movie.overview}
                id={movie.id}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import Page from "../components/Page";

function Detail() {
  const params = useParams();
  const { id } = params;
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const getMovie = async () => {
    const json = await (
      await fetch(
        // `https://api.themoviedb.org/3/movie/popular?api_key=0da33e1534845c1687aa49230d4613ba&language=en-US&page=1/movie/${id}`
        `https://api.themoviedb.org/3/movie/popular?api_key=0da33e1534845c1687aa49230d4613ba&language=en-US&page=1`
      )
    ).json();
    setCategory(json.results);
    setLoading(false);
    console.log(category);
  };
  useEffect(() => {
    getMovie();
  });

  console.log(category);
  return (
    <div>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div>
          <h1>영화 아이디 값: {id}</h1>
          <div>각 영화 페이지 수정 중입니다...</div>
          {/* {category.map((page) => (
            <div
              key={page.id}
              // imgsrc={imgsrc}
              // poster_path={movie.poster_path}
              // title={movie.title}
              // overview={movie.overview}
              // id={movie.id}
            />
          ))} */}
        </div>
      )}
    </div>
  );
}

export default Detail;

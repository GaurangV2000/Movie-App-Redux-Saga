import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMovie } from "../redux/feature/movieSlice";

const Movie = () => {
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => ({ ...state.movie }));
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(getMovie(id));
    }
  }, [id]);

  return (
    <>
      <div className="card mb-3 moviecard">
        <div className="image">
          <img src={movie.Poster} className="card-img-top imgm" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{movie.Title}</h5>
          <p className="card-text">Director = {movie.Director}</p>
          <p className="card-text">Actors = {movie.Actors}</p>
          <p className="card-text">Awards = {movie.Awards}</p>
          <p className="card-text">BoxOffice = {movie.BoxOffice}</p>
          <p className="card-text">ReleaseDate={movie.Year}</p>
        </div>
        <button
          type="button"
          onClick={() => {
            navigate("/");
          }}
          className=" btn-primary btn-lg btn-block buttoncard"
        >
          Go Back To Home Page
        </button>
      </div>
    </>
  );
};

export default Movie;

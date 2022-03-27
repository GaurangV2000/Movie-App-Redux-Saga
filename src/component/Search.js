import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMovies, setMovies } from "../redux/feature/movieSlice";

const Search = () => {
  const [name, setName] = useState("spider");
  const {
    movieList: { Error: error },
  } = useSelector((state) => ({ ...state.movie }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies(name));
  }, [name]);

  return (
    <>
      {/* <div className="search"> */}
      <h1>MOVIE APP</h1>
      <div className="input-group mb-3 search-btn">
        <input
          type="text"
          value={name}
          className="form-control search-btn"
          placeholder="Movie Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="errorp">{error && <p>{error}</p>}</div>
    </>
  );
};

export default Search;

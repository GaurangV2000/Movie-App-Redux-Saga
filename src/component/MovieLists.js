import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function MovieLists() {
  const { movieList } = useSelector((state) => ({ ...state.movie }));

  return (
    <>
      <div className="main">
        <h1>Movies</h1>
        <ul className="cards">
          {movieList.Search?.map((item, index) => (
            <li key={index} className="cards_item">
              <Link to={`/movie/${item.imdbID}`}>
                <div className="card">
                  <div className="card_image">
                    <img src={item.Poster} />
                  </div>
                  <div className="card_content">
                    <h2 className="card_title">{item.Title}</h2>
                    <p className="card_text">`Release Date = {item.Year}`</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <h3 className="made_by">Made By Gaurang ♡</h3>
    </>
  );
}

export default MovieLists;

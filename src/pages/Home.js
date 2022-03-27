import React from "react";
import MovieLists from "../component/MovieLists";
import Search from "../component/Search";

const Home = () => {
  return (
    <>
      <Search />
      <MovieLists />
    </>
  );
};

export default Home;

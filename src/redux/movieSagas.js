import { takeLatest, put, fork, call } from "redux-saga/effects";
import { getMovies, setMovies, getMovie, setMovie } from "./feature/movieSlice";
import { fetchMovies, fetchMovie } from "./api";

function* onLoadMoviesAsync(payload) {
  try {
    const movieName = payload.payload;
    const response = yield call(fetchMovies, movieName);
    if (response.status === 200) {
      yield put(setMovies({ ...response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}

function* onLoadMovieAsync(payload) {
  try {
    const movieId = payload.payload;
    const res = yield call(fetchMovie, movieId);
    if (res.status === 200) {
      yield put(setMovie({ ...res.data }));
      console.log({ ...res.data });
    }
  } catch (error) {
    console.log(error);
  }
}

function* onLoadMovies() {
  yield takeLatest(getMovies.type, onLoadMoviesAsync);
}
function* onLoadMovie() {
  yield takeLatest(getMovie.type, onLoadMovieAsync);
}

export const movieSagas = [fork(onLoadMovies), fork(onLoadMovie)];

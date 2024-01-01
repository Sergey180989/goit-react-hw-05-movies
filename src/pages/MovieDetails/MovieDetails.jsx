import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'service/api';
import MovieDetailsItem from 'components/MovieDetailsItem/MovieDetailsItem';
const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  console.log('first', location);

  const backLinkHref = location.state?.from ?? '/movies';
  console.log('second', backLinkHref);

  const [movieDetails, setMovieDetails] = useState([]);
  useEffect(() => {
    getMovieDetails(movieId)
      .then(resp => {
        setMovieDetails(resp);
      })
      .catch(err => console.log('inmoviedetails', err));
  }, [movieId]);
  const { data } = movieDetails;
  return (
    <>
      {location.state ? (
        <Link to={backLinkHref}>Go back</Link>
      ) : (
        <Link to="/">Go back</Link>
      )}

      {movieDetails.length !== 0 && <MovieDetailsItem data={data} />}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;

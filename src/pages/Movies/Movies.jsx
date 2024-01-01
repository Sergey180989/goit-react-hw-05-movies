import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { searchMovie } from 'service/api';
import SearchForm from 'components/SearchForm/SearchForm';
import SearchList from 'components/SearchList/SearchList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  useEffect(() => {
    if (!query) return;
    searchMovie(query)
      .then(resp => {
        setMovies(resp);
      })
      .catch(err => console.log(err));
  }, [query]);

  return (
    <>
      <SearchForm setSearchParams={setSearchParams} />

      <SearchList movies={movies} />
    </>
  );
};

export default Movies;

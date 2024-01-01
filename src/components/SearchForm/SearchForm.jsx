import { useEffect, useState } from 'react';

const SearchForm = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');
  const [searchStatus, setSearchStatus] = useState('');

  useEffect(() => {
    const storedStatus = localStorage.getItem('searchStatus');
    if (storedStatus) {
      setSearchStatus(storedStatus);
      localStorage.removeItem('searchStatus');
    }
  }, []);

  const onChange = e => {
    setQuery(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!query.trim()) {
      alert('Sorry! Enter name film');
      return;
    }
    setSearchParams({ query: query.trim() });
    setQuery('');
  };

  useEffect(() => {
    if (searchStatus === 'not-found') {
      localStorage.setItem('searchStatus', searchStatus);
    }
  }, [searchStatus]);

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={onChange}
        value={query}
        placeholder={
          searchStatus === 'empty' ? 'Заповніть запит' : 'Введіть запит'
        }
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

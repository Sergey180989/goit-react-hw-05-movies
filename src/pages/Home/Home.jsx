import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { trendingMovie } from 'service/api';

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    trendingMovie()
      .then(resp => {
        setData(resp.results);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <>
      <h2>Trending today</h2>
      <main>
        <ul>
          {data.map(({ title, name, id }) => {
            return (
              <li key={id}>
                <Link to={`movies/${id}`}>{title || name}</Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Home;

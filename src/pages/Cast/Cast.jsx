import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'service/api';
import CastList from 'components/CastList/CastList';
const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  useEffect(() => {
    getMovieCredits(movieId)
      .then(resp => {
        setCredits(resp);
      })
      .catch(err => console.log('incastERR', err));
  }, [movieId]);

  return <div>{credits && <CastList credits={credits.cast} />}</div>;
};

export default Cast;

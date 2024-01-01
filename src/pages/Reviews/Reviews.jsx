import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/api';
import ReviewsComponent from 'components/ReviewsComponent/ReviewsComponent';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getMovieReviews(movieId)
      .then(resp => {
        setReviews(resp);
      })
      .catch(err => console.log(err));
  }, [movieId]);
  return <>{reviews && <ReviewsComponent reviews={reviews} />}</>;
};

export default Reviews;

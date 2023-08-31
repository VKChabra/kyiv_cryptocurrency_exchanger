import { updateReviewStatus } from 'services/fetchDB';
import { SelectStatus } from './forms/SelectStatus';

export const ReviewList = ({ reviews }) => {
  const getUpdatedStatus = status => {
    console.log(status);
  };

  const handleUpdateStatus = reviewId => {
    const fetchData = async () => {
      const data = await updateReviewStatus(reviewId);
      console.log(data);
    };

    fetchData();
  };

  return (
    <ul>
      {reviews.map(review => {
        const { _id: id, review: reviewContent } = review;

        return (
          <li key={id}>
            <p>{reviewContent}</p>

            <SelectStatus getUpdatedStatus={getUpdatedStatus} />
          </li>
        );
      })}
    </ul>
  );
};

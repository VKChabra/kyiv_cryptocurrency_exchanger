import ReviewsList from 'components/reviews/ReviewsList';
import customerReviews from 'components/reviews/customers';

const ReviewsPage = () => {
  return (
    <div>
      <h2>Що про нас говорять</h2>
      <ReviewsList reviews={customerReviews} />
    </div>
  );
};

export default ReviewsPage;

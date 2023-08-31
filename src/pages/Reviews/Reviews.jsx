import ReviewsList from 'components/reviews/ReviewsList';
import customerReviews from 'components/reviews/customers';
import LoadMoreBtn from 'components/reviews/LoadMoreBtn';
import { Container } from './Reviews.styled';

const ReviewsPage = () => {
  return (
    <Container>
      <h2>Що про нас говорять</h2>
      <ReviewsList reviews={customerReviews} />
      <LoadMoreBtn />
    </Container>
  );
};

export default ReviewsPage;

import ReviewsList from 'components/reviews/ReviewsList';
import { Container } from './Reviews.styled';
import { useGetApprovedReviewsQuery } from 'redux/reviews/reviewsApi';
import Loader from 'components/loader/Loader';
import ReviewPagination from 'components/reviews/Pagination/ReviewPagination';
import ReviewForm from 'components/reviews/ReviewForm';

const ReviewsPage = () => {
  const { data = [], status } = useGetApprovedReviewsQuery(1);

  return (
    <Container>
      <h2>Що про нас говорять</h2>
      {status === 'pending' && <Loader />}
      {!status === 'pending' && data?.length === 0 && <h2>No reviews found</h2>}
      {data?.length > 0 && (
        <>
          <ReviewsList reviews={data} />
          <ReviewPagination />
          <ReviewForm />
        </>
      )}
    </Container>
  );
};

export default ReviewsPage;

import ReviewsList from 'components/reviews/ReviewsList/ReviewsList';
import { Container, TextWrap } from './Reviews.styled';
import { useGetApprovedReviewsQuery } from 'services/reviewsApi';
import Loader from 'components/loader/Loader';
import ReviewPagination from 'components/reviews/Pagination/ReviewPagination';
import ReviewForm from 'components/reviews/ReviewForm/ReviewForm';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useTranslation } from 'react-i18next';

const ReviewsPage = () => {
  const { t } = useTranslation();
  const { pageNumber } = useSelector(state => state?.reviews);
  const { data, status } = useGetApprovedReviewsQuery(Number(pageNumber));

  return (
    <Container>
      <TextWrap>
        <h2>{t('reviews.title')}</h2>
        <p>{t('reviews.subTitle')}</p>
      </TextWrap>
      {status === 'pending' && <Loader />}
      {!status === 'pending' && data?.length === 0 && <h2>No reviews found</h2>}
      {data && (
        <div>
          <ReviewsList reviews={data.reviews} />
          <ReviewPagination total={data.totalPages} current={data.currentPage} />
          <ReviewForm />
        </div>
      )}
    </Container>
  );
};

export default ReviewsPage;

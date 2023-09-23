import { ReviewContainer, SubTitle, SwiperWrapper, Title, Item } from './HomePageReviews.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useGetApprovedReviewsQuery } from 'services/reviewsApi';
import ReviewsItem from 'components/reviews/ReviewsItem';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const HomePageReviews = () => {
  const { data } = useGetApprovedReviewsQuery();
  const reviews = data?.reviews;
  const { t } = useTranslation();

  return (
    <ReviewContainer>
      <Title>{t('homeReviews.title')}</Title>
      <SubTitle>{t('homeReviews.subTitle')}</SubTitle>
      <SwiperWrapper>
        <Swiper
          className="swiper-container"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: false }}
        >
          {reviews?.map((item, index) => (
            <SwiperSlide key={item._id || index}>
              <Item>
                <ReviewsItem className="reviewItem" data={item} />
              </Item>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
    </ReviewContainer>
  );
};

export default HomePageReviews;

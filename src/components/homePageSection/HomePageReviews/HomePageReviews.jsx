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

const HomPageReviews = () => {
  const { data } = useGetApprovedReviewsQuery();
  const reviews = data?.reviews;
  const { t } = useTranslation();

  console.log(reviews);

  return (
    <ReviewContainer>
      <Title>{t('homeReviews.title')}</Title>
      <SubTitle>{t('homeReviews.subTitle')}</SubTitle>
      <SwiperWrapper>
        <Swiper
          className="swiper-container"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: false }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          {reviews?.map(item => (
            <SwiperSlide>
              <Item key={item._id}>
                <ReviewsItem className="reviewItem" data={item} />
              </Item>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
    </ReviewContainer>
  );
};

export default HomPageReviews;
import {
  Container,
  ImageWrapper,
  ReviewDate,
  NameWpapper,
  Name,
  ReviewWpapper,
  DateStarWpapper,
} from './ReviewsItem.styled';
import { Rating } from '@mui/material';

const ReviewsItem = ({ data = [] }) => {
  const slicedDate = data.createdAt.slice(0, 10).toString();

  return (
    <Container>
      <ImageWrapper>
        <p>{data.owner.name.charAt(0).toUpperCase()}</p>
      </ImageWrapper>
      <NameWpapper>
        <Name>{data.owner.name}</Name>
      </NameWpapper>
      <ReviewWpapper>
        <p>{data.review}</p>
      </ReviewWpapper>
      <DateStarWpapper>
        <div>
          <Rating name={data.owner.id} defaultValue={2} size="large" />
        </div>
        <div>
          <ReviewDate>{slicedDate}</ReviewDate>
        </div>
      </DateStarWpapper>
    </Container>
  );
};

export default ReviewsItem;

import {
  Container,
  ImageWrapper,
  ReviewDate,
  NameWpapper,
  Name,
  ReviewWpapper,
} from './ReviewsItem.styled';
// import { Rating } from '@mui/material';

const ReviewsItem = ({ data }) => {
  return (
    <Container>
      <div>
        <ImageWrapper>
          <p>{data.owner.name.charAt(0).toUpperCase()}</p>
        </ImageWrapper>
        <NameWpapper>
          <Name>{data.owner.name}</Name>
        </NameWpapper>
        <ReviewWpapper>
          <p>{data.review}</p>
        </ReviewWpapper>
        <div>
          <ReviewDate>{data.createAt}</ReviewDate>
        </div>

        {/* <Rating name={data.owner.id} defaultValue={2} size="large" /> */}
      </div>
    </Container>
  );
};

export default ReviewsItem;

import {
  Container,
  BlackElipse,
  PurpleElipse,
  OrangeElipse,
  NameLetter,
  ImageWrapper,
  ReviewDate,
  NameWpapper,
  Name,
  ReviewWpapper,
  DateStarWpapper,
} from './ReviewsItem.styled';
import { Rating } from '@mui/material';
import blackCircle from '../../../images/blackCircle.svg';
import purpleElipse from '../../../images/purpleElipse.svg';
import orangeElipse from '../../../images/orangeElipse.svg';

const ReviewsItem = ({ data = [] }) => {
  const slicedDate = data.createdAt.slice(0, 10).toString();

  return (
    <Container>
      <BlackElipse src={blackCircle} alt="avatar" />
      <PurpleElipse src={purpleElipse} alt="avatar" />
      <OrangeElipse src={orangeElipse} alt="avatar" />
      <NameLetter>{data.owner.name.charAt(0).toUpperCase()}</NameLetter>

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

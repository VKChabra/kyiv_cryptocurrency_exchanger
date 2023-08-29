import { List, Item } from './ReviewsList.styled';
import ReviewsItem from '../ReviewsItem/ReviewsItems';

const ReviewsList = ({ reviews }) => {
  return (
    <List>
      {reviews.map(item => (
        <Item id={reviews.id}>
          <ReviewsItem data={item} />
        </Item>
      ))}
    </List>
  );
};

export default ReviewsList;

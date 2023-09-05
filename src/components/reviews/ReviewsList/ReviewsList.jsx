import { List, Item } from './ReviewsList.styled';
import ReviewsItem from '../ReviewsItem/ReviewsItems';
// import { useState } from 'react';

const ReviewsList = ({ reviews }) => {
  // const [page, setPage] = useState(1);
  console.log(reviews);

  return (
    <List>
      {reviews?.map(item => (
        <Item key={item._id}>
          <ReviewsItem data={item} />
        </Item>
      ))}
    </List>
  );
};

export default ReviewsList;

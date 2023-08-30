import { Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { SelectStatus } from 'components/admin/forms/SelectStatus';
import { useEffect, useState } from 'react';
import { getAllReviews, updateReviewStatus } from 'services/fetchDB';

const AdminPage = () => {
  const [reviews, setReviews] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const { items, nextCursor } = await getAllReviews();

        console.log(items);
        setReviews(items);
        setCursor(nextCursor);

        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleClick = () => {
    const params = { cursor };

    const fetchData = async () => {
      setIsLoading(true);

      const { items, nextCursor } = await getAllReviews(params);

      console.log(items);
      setReviews(prevItems => [...prevItems, ...items]);
      setCursor(nextCursor);

      setIsLoading(false);
    };

    fetchData();
  };

  const handleUpdateStatus = reviewId => {
    const fetchData = async () => {
      setIsLoading(true);

      const data = await updateReviewStatus(reviewId);
      console.log(data);

      setIsLoading(false);
    };

    fetchData();
  };

  const getUpdatedStatus = status => {
    console.log(status);
  };

  return (
    <div>
      <h1>AdminPage</h1>

      <ul>
        {reviews.map(review => {
          const { _id: id, review: reviewContent } = review;

          return (
            <li key={id}>
              <p>{reviewContent}</p>

              <SelectStatus getUpdatedStatus={getUpdatedStatus} />
            </li>
          );
        })}
      </ul>

      {isLoading && <div>Loading</div>}

      <Button variant="contained" type="button" onClick={handleClick}>
        load more
      </Button>
    </div>
  );
};

export default AdminPage;

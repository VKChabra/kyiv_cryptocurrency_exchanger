import { Box, Button, Typography } from '@mui/material';
import { ReviewList } from 'components/admin/OperationList';
import { useEffect, useState } from 'react';
import { getAllReviews } from 'services/fetchDB';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { items, nextCursor } = await getAllReviews();

      console.log(items);
      setReviews(items);
      setCursor(nextCursor);

      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleLoadMore = () => {
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

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        justifyContent: 'center',
      }}
    >
      <ReviewList reviews={reviews} />

      {isLoading && (
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          Loading
        </Box>
      )}

      <Box sx={{ textAlign: 'center' }}>
        {reviews.length !== 0 && (
          <Button variant="contained" type="button" onClick={handleLoadMore} sx={{ width: 200 }}>
            load more
          </Button>
        )}
      </Box>

      {reviews.length === 0 && !isLoading && <Typography>deded</Typography>}
    </Box>
  );
};

export default ReviewPage;

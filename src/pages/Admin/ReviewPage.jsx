import { Box, Button, Typography } from '@mui/material';
import { ReviewList } from 'components/admin/OperationList';
import { SelectStatus } from 'components/admin/forms/SelectStatus';
import { useEffect, useState } from 'react';
import { getAllReviews } from 'services/fetchDB';
import RefreshIcon from '@mui/icons-material/Refresh';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState('pending');

  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const params = { status: filter };

    const fetchData = async () => {
      const { items, nextCursor } = await getAllReviews(params);

      console.log(items);
      setReviews(items);
      setCursor(nextCursor);

      setIsLoading(false);
    };

    fetchData();
  }, [filter]);

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

  const handleRefresh = () => {
    const params = { status: filter };
    setIsRefreshing(true);

    const fetchData = async () => {
      const { items, nextCursor } = await getAllReviews(params);

      console.log(items);
      setReviews(items);
      setCursor(nextCursor);

      setIsLoading(false);

      setIsRefreshing(false);
    };

    fetchData();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 4,
          // justifyContent: 'space-between',
          px: 4,
        }}
      >
        <Button
          variant="contained"
          type="button"
          onClick={handleRefresh}
          sx={{
            width: 200,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography> Refresh{isRefreshing && 'ing..'}</Typography>

          <RefreshIcon
            sx={{
              ...(isRefreshing && {
                animation: 'spin 2s linear infinite',
              }),
            }}
          />
        </Button>

        <SelectStatus status={filter} setStatus={setFilter} />
      </Box>

      {reviews.length !== 0 && <ReviewList reviews={reviews} />}

      {isLoading && reviews.length === 0 && (
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          Loading
        </Box>
      )}

      {reviews.length === 0 && !isLoading && <Typography>No results</Typography>}

      {reviews.length !== 0 && (
        <Box sx={{ textAlign: 'center' }}>
          <Button variant="contained" type="button" onClick={handleLoadMore} sx={{ width: 200 }}>
            {isLoading ? 'Loading' : 'Load more'}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ReviewPage;

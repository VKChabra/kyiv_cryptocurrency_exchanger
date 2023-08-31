import { Button } from '@mui/material';
import { ReviewList } from 'components/admin/OperationList';
import { useEffect, useState } from 'react';
import { getAllReviews } from 'services/fetchDB';

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
    <div>
      <h1>AdminPage</h1>

      <ReviewList reviews={reviews} />

      {isLoading && <div>Loading</div>}

      <Button variant="contained" type="button" onClick={handleLoadMore}>
        load more
      </Button>
    </div>
  );
};

export default AdminPage;

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
// import { useGetAllReviewsQuery } from 'redux/reviews/reviewsApi';

const ReviewPagination = () => {
  const [page, setPage] = useState(1);
  // const { data = [], isLoading, isFetching } = useGetAllReviewsQuery(page);

  const handleChange = (event, value) => {
    setPage(value);
    console.log(value);
  };

  return (
    <div>
      <Stack spacing={2}>
        <Pagination count={10} size="large" page={page} onChange={handleChange} />
      </Stack>
    </div>
  );
};

export default ReviewPagination;

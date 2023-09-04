import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { Container, Pages } from './ReviewPagination.styled';
import { useDispatch } from 'react-redux';
import { changePageNumber } from 'redux/reviews/reviewSlice';

const ReviewPagination = ({ total, current }) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    setPage(value);
    console.log(value);
    dispatch(changePageNumber(value));
  };

  return (
    <Container>
      <Stack spacing={2}>
        <Pagination count={total} size="large" page={page} onChange={handleChange} />
      </Stack>
    </Container>
  );
};

export default ReviewPagination;

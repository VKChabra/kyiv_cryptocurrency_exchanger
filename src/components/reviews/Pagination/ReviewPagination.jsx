import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { Container } from './ReviewPagination.styled';
import { useDispatch } from 'react-redux';
import { changePageNumber } from 'redux/reviews/reviewSlice';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    purple: '#3E45C3',
    orange: '#FE9505',
  },
});

const ReviewPagination = ({ total, current }) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    setPage(value);
    dispatch(changePageNumber(value));
  };

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Stack spacing={2}>
          <Pagination
            count={total}
            size="large"
            page={page}
            onChange={handleChange}
            color="purple"
          />
        </Stack>
      </ThemeProvider>
    </Container>
  );
};

export default ReviewPagination;

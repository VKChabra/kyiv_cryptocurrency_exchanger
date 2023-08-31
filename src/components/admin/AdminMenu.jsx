import { Box, Typography } from '@mui/material';
import Loader from 'components/loader/Loader';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const AdminMenu = () => {
  return (
    <Box>
      <Link to="/admin">
        <Typography>Account</Typography>
      </Link>

      <Link to="/admin/reviews">
        <Typography>Reviews</Typography>
      </Link>

      <Link to="/admin/transactions">
        <Typography>Transactions</Typography>
      </Link>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

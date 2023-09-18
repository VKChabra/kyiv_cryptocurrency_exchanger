import { Box, Typography } from '@mui/material';
import Loader from 'components/loader/Loader';
import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const AdminMenu = () => {
  return (
    <Box sx={{ display: 'flex', mt: 5, mb: 14 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, px: 10 }}>
        <Link to="/admin">
          <Typography>Account</Typography>
        </Link>
        <Link to="/admin/reviews">
          <Typography>Reviews</Typography>
        </Link>
        <Link to="/admin/transactions">
          <Typography>Transactions</Typography>
        </Link>
        <Link to="/admin/chat">
          <Typography>Chat</Typography>
        </Link>
      </Box>

      <div style={{ width: '100%' }}>
        <Suspense fallback={<Loader />} style={{ width: '100%' }}>
          <Outlet />
        </Suspense>
      </div>
    </Box>
  );
};

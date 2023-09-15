import { SelectStatus } from './forms/SelectStatus';
import { useState } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Alert, Box, Button } from '@mui/material';
import { getFormattedFullDate } from 'helpers/formatDate';
import { updateReviewStatus } from 'services/fetchDB';

export const TransactionItem = ({ review, expanded, setExpanded, handleChangePanel }) => {
  const currentStatus = review.status;
  const [newStatus, setNewStatus] = useState(currentStatus);
  const [isUpdateStatus, setIsUpdateStatus] = useState(false);
  const [error, setError] = useState(false);

  const {
    _id: id,
    status,
    owner,
    amountToExchange,
    amountToReceive,
    createdAt,
    updatedAt,
    creditCard,
    currencyToExchange,
    currencyToReceive,
    paymentMethod,
  } = review;

  const dateOfRegistration = getFormattedFullDate(new Date(owner.createdAt));

  const handleUpdateStatus = reviewId => {
    const fetchData = async () => {
      setError(false);

      const result = await updateReviewStatus(reviewId, newStatus);

      if (result) {
        setIsUpdateStatus(true);
        setExpanded(false);
      } else {
        setError('Something went wrong. Reload the page and try again.');
      }
    };

    fetchData();
  };

  if (isUpdateStatus && currentStatus !== newStatus) return;

  return (
    <>
      {error && (
        <Alert sx={{ mb: 3 }} severity="error">
          {error}
        </Alert>
      )}

      <Accordion
        expanded={expanded === `${id}`}
        onChange={handleChangePanel(`${id}`)}
        sx={{ width: '100%', mb: 1, bgcolor: 'transparent' }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            sx={{
              width: '60%',
              flexShrink: 0,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              mr: 4,
            }}
          >
            {amountToExchange}
            {currencyToExchange} - {amountToReceive}
            {currencyToReceive}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>status: {status}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              p: 4,
              gap: 4,
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box>
                <Typography>createdAt: {createdAt}</Typography>
                <Typography>updatedAt: {updatedAt}</Typography>

                <Typography>currencyToExchange: {currencyToExchange}</Typography>
                <Typography>currencyToReceive: {currencyToReceive}</Typography>

                <Typography>paymentMethod: {paymentMethod}</Typography>
                <Typography>creditCard: {creditCard}</Typography>
              </Box>

              {owner.email && (
                <Box>
                  <Typography>Owner Data</Typography>

                  <Box sx={{ marginLeft: '20px' }}>
                    <Typography>Name: {owner.name}</Typography>
                    <Typography>Email: {owner.email}</Typography>
                    <Typography>Role: {owner.role}</Typography>
                    <Typography>Date of registration: {dateOfRegistration}</Typography>
                  </Box>
                </Box>
              )}
            </Box>

            <SelectStatus status={newStatus} setStatus={setNewStatus} />
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              type="button"
              onClick={() => handleUpdateStatus(id)}
              sx={{ width: 200 }}
              disabled={newStatus === currentStatus}
            >
              Update Status
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

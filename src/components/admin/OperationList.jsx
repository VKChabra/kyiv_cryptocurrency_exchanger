import { updateReviewStatus } from 'services/fetchDB';
import { SelectStatus } from './forms/SelectStatus';
import { useState } from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button } from '@mui/material';
import { getFormattedFullDate } from 'helpers/formatDate';

export const ReviewList = ({ reviews }) => {
  const [expanded, setExpanded] = useState(false);
  const [newStatus, setNewStatus] = useState('pending');

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleUpdateStatus = reviewId => {
    const fetchData = async () => {
      await updateReviewStatus(reviewId);
    };

    fetchData();
  };

  return (
    <Box sx={{ px: 4 }}>
      {reviews.map(review => {
        const { _id: id, review: reviewContent, status, owner } = review;
        const dateOfRegistration = getFormattedFullDate(new Date(owner.createdAt));

        return (
          <Accordion
            key={id}
            expanded={expanded === `${id}`}
            onChange={handleChange(`${id}`)}
            sx={{ width: '100%' }}
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
                Review: {reviewContent} Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, quam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
                quam?
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
                  <Typography>
                    Review: {reviewContent} Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, quam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia, quam?
                  </Typography>

                  <Box>
                    <Typography>Owner Data</Typography>

                    <Box sx={{ marginLeft: '20px' }}>
                      <Typography>Name: {owner.name}</Typography>
                      <Typography>Email: {owner.email}</Typography>
                      <Typography>Role: {owner.role}</Typography>
                      <Typography>Date of registration: {dateOfRegistration}</Typography>
                    </Box>
                  </Box>

                  <Typography>Сredentials: credentials</Typography>
                </Box>

                <SelectStatus status={newStatus} setStatus={setNewStatus} />
              </Box>

              <Box sx={{ textAlign: 'center' }}>
                <Button
                  variant="contained"
                  type="button"
                  onClick={() => handleUpdateStatus(id)}
                  sx={{ width: 200 }}
                  disabled={newStatus === 'pending'}
                >
                  Update Status
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

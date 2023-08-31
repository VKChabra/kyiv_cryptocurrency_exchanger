import { useState } from 'react';
import { Box } from '@mui/material';
import { ReviewItem } from './ReviewItem';

export const ReviewList = ({ reviews }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChangePanel = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ px: 4 }}>
      {reviews.map(review => (
        <ReviewItem
          key={review._id}
          review={review}
          expanded={expanded}
          setExpanded={setExpanded}
          handleChangePanel={handleChangePanel}
        ></ReviewItem>
      ))}
    </Box>
  );
};

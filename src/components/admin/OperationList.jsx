import { useState } from 'react';
import { Box } from '@mui/material';
import { ReviewItem } from './ReviewItem';
import { TransactionItem } from './TransactionItem';

export const OperationList = ({ array, operation }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChangePanel = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ px: 4 }}>
      {array.map(review => (
        <div key={review._id}>
          {operation === 'review' && (
            <ReviewItem
              review={review}
              expanded={expanded}
              setExpanded={setExpanded}
              handleChangePanel={handleChangePanel}
            ></ReviewItem>
          )}
          {operation === 'transaction' && (
            <TransactionItem
              review={review}
              expanded={expanded}
              setExpanded={setExpanded}
              handleChangePanel={handleChangePanel}
            ></TransactionItem>
          )}
        </div>
      ))}
    </Box>
  );
};

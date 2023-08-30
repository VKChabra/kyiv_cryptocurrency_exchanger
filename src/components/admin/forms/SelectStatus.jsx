import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

export const SelectStatus = ({ getUpdatedStatus }) => {
  const [status, setStatus] = useState('pending');

  const handleChange = event => {
    const newStatus = event.target.value;
    setStatus(newStatus);
    getUpdatedStatus(newStatus);
  };

  return (
    <Box sx={{ maxWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={status}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value={'pending'}>pending</MenuItem>
          <MenuItem value={'accepted'}>accepted</MenuItem>
          <MenuItem value={'rejected'}>rejected</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

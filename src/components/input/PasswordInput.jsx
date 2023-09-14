import { useState } from 'react';
import { IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Input } from './Input.styled';

export const PasswordInput = ({ size = 'small', onChange, margin = 'dense', required = true }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Input
      label="Password"
      name="password"
      type={showPassword ? 'text' : 'password'}
      autoComplete="on"
      size={size}
      onChange={onChange}
      margin={margin}
      required={required}
      InputProps={{
        endAdornment: (
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        ),
      }}
    ></Input>
  );
};

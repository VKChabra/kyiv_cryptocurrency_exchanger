import { Input } from './Input.styled';

const MuiCustomInput = ({
  label = 'label',
  name = 'name',
  type = 'text',
  autoComplete = false,
  size = 'small',
  defaultValue = 'value',
  onChange,
  margin = 'dense',
  required = false,
  helperText,
}) => {
  return (
    <Input
      label={label}
      helperText={helperText}
      name={name}
      type={type}
      autoComplete={autoComplete}
      size={size}
      defaultValue={defaultValue}
      onChange={onChange}
      margin={margin}
      required={required}
    />
  );
};

export default MuiCustomInput;

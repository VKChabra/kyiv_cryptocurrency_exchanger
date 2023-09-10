import { Input } from './Input.styled';

const MuiCustomInput = ({
  label = 'label',
  name = 'name',
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
      size={size}
      defaultValue={defaultValue}
      onChange={onChange}
      margin={margin}
      required={required}
    />
  );
};

export default MuiCustomInput;

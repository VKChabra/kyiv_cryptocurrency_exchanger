import { useDispatch } from 'react-redux';
import { Field, Form } from './Registration.styled';
import { useState } from 'react';
import { register } from 'redux/auth/operations';
import { authErrorNotification } from 'helpers';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (!email || !name || !password) {
      return authErrorNotification();
    }
    dispatch(register({ name, email, password }));
    setName('');
    setMail('');
    setPassword('');
  };

  const handleChange = e => {
    const value = e.target.value.toLowerCase().trim();
    const field = e.target.name;
    switch (field) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setMail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field>
        User Name
        <input type="text" name="name" value={name} onChange={handleChange} />
      </Field>
      <Field>
        Mail
        <input type="email" name="email" value={email} onChange={handleChange} />
      </Field>
      <Field>
        Password
        <input type="password" name="password" value={password} onChange={handleChange} />
      </Field>
      <button type="submit">Register</button>
    </Form>
  );
};

export default Registration;

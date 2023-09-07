import { Title, Text, Form, Button } from './ReviewForm.styled';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { useNavigate } from 'react-router-dom';
import { Rating } from '@mui/material';
import { useState } from 'react';
import { useAddReviewMutation } from 'redux/reviews/reviewsApi';
import { notifySuccess, notifyWarning, notifyError } from '../../../helpers/notifications';

const ReviewForm = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const navigate = useNavigate();
  const [addReview] = useAddReviewMutation();
  const [starValue, setStarValue] = useState(3);
  const [feedback, setFeedback] = useState('');

  const handleChange = e => {
    setFeedback(e.target.value);
  };

  const handleSubmit = async e => {
    try {
      if (!isLoggedIn) {
        notifyWarning('Щоб залишити відгук будь-ласка залогіньтеся');
        navigate('/login');
        return;
      }
      e.preventDefault();
      // const data = { review: feedback, star: starValue };
      const data = { review: feedback };
      console.log(data);
      await addReview(data);
      notifySuccess('Ваш відгук додано');
      setFeedback('');
    } catch {
      notifyError('Щось пішло е так...Ваш відгук не додано');
      return;
    }
  };

  return (
    <div>
      <Title>Залишіть свій відгук</Title>
      <Text>Ми будемо раді бачити і ваш відгук, який можна залишити після першої транзакції</Text>
      <Form onSubmit={handleSubmit}>
        <div>
          <Rating
            name="simple-controlled"
            size="large"
            value={starValue}
            onChange={(event, newValue) => {
              setStarValue(newValue);
            }}
            sx={{ marginBottom: '40px' }}
          />
        </div>
        <div>
          <label htmlFor="review">
            <input
              name="review"
              value={feedback}
              type="textarea"
              rows="4"
              cols="50"
              placeholder="Напишіть відгук"
              required
              minLength="6"
              onChange={handleChange}
            />
          </label>
          <Button type="submit">Залишити відгук</Button>
        </div>
      </Form>
    </div>
  );
};

export default ReviewForm;

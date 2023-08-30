import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const contactsErrorNotification = name => {
  Notify.failure(`${name} is already in contacts.`);
};

export const authErrorNotification = () => {
  Notify.failure(`Please fill in all fields`);
};

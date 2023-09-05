import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { reviewsApi } from './reviews/reviewsApi';
import reviewsSlice from './reviews/reviewSlice';
import { storeCalcFormReducer } from './exchange/storeCalculatorForm';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const storeCalcFormConfig = { key: 'storeCalcForm', storage };

const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(reviewsApi.middleware),
];

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    reviews: reviewsSlice,
    calcFormData: persistReducer(storeCalcFormConfig, storeCalcFormReducer),
  },
  middleware,
});
export const persistor = persistStore(store);

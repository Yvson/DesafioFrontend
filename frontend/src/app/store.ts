import { configureStore } from '@reduxjs/toolkit';
import api from '../services';
import fundsReducer from './slice/fundsSlice';
import uiReducer from './slice/uiSlice';
import { pageLoadedFlow } from './middleware/ui';
import { loadFundsFlow } from './middleware/funds';


export const store = configureStore({
  reducer: {
      funds: fundsReducer,
      ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pageLoadedFlow, loadFundsFlow)
})
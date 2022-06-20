
import { createSlice } from '@reduxjs/toolkit';

export interface Funds {
    allFunds: Array<number>
    fundInfo: Array<any>
    error: any
    status: string
}

const initialState: Funds = {
  allFunds: [],
  fundInfo: [],
  error: null,
  status: '',
}

export const fundsSlice = createSlice({
  name: 'funds',
  initialState,
  reducers: {
    loadFundsSuccess: (state, action) => {
      state.allFunds = action.payload.allFunds;
      state.status = action.type;
    },
    loadFundsFailure: (state, action) => {
      state.error = action.payload.error;
      state.status = action.type;
    },
    loadFunds: (state, action) => {
      state.status = action.type;
    },
    loadFundInfo: (state, action) => {
      state.status = action.type;
    },
    loadFundInfoSuccess: (state, action) => {
      state.fundInfo = action.payload.fundInfo;
      state.status = action.type;
    },
    loadFundInfoFailure: (state, action) => {
      state.error = action.payload.error;
      state.status = action.type;
    },
    


  },
});

// Action creators are generated for each case reducer function
export const { loadFundsSuccess, loadFundsFailure, loadFunds, loadFundInfo, loadFundInfoSuccess, loadFundInfoFailure } = fundsSlice.actions

export default fundsSlice.reducer

import { createSlice } from '@reduxjs/toolkit';

export interface Funds {
    allFunds: Array<number>
    fundInfo: Array<any>
    historicalData: Array<any>
    error: any
    status: string
}

const initialState: Funds = {
  allFunds: [],
  fundInfo: [],
  historicalData: [],
  error: null,
  status: '',
}

export const fundsSlice = createSlice({
  name: 'funds',
  initialState,
  reducers: {
    loadFunds: (state, action) => {
      state.status = action.type;
    },
    loadFundsSuccess: (state, action) => {
      state.allFunds = action.payload.allFunds;
      state.status = action.type;
    },
    loadFundsFailure: (state, action) => {
      state.error = action.payload.error;
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
    loadHistoricalData: (state, action) => {
      state.status = action.type;
    },
    loadHistoricalDataSuccess: (state, action) => {
      state.historicalData = action.payload.historicalData;
      state.status = action.type;
    },
    loadHistoricalDataFailure: (state, action) => {
      state.error = action.payload.error;
      state.status = action.type;
    },
  },
});

// Action creators are generated for each case reducer function
export const { 
  loadFundsSuccess,
  loadFundsFailure,
  loadFunds,
  loadFundInfo,
  loadFundInfoSuccess,
  loadFundInfoFailure,
  loadHistoricalData,
  loadHistoricalDataSuccess,
  loadHistoricalDataFailure
} = fundsSlice.actions

export default fundsSlice.reducer
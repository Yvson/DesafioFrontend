
import { createSlice } from '@reduxjs/toolkit';



export interface Ui {
    loading: boolean
    loadingFundInfo: boolean
    loadingHistoricalData: boolean
    status: string
}

const initialState: Ui = {
  loading: true,
  loadingFundInfo: true,
  loadingHistoricalData: true,
  status: '',
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoadingOn: (state, action) => {
        state.loading = action.payload.loading;
        state.status = action.type;
    },
    setLoadingOff: (state, action) => {
        state.loading = action.payload.loading;
        state.status = action.type;
    },
    setLoadingFundInfoOn: (state, action) => {
      state.loadingFundInfo = action.payload.loading;
      state.status = action.type;
    },
    setLoadingFundInfoOff: (state, action) => {
      state.loadingFundInfo = action.payload.loading;
      state.status = action.type;
    },
    setLoadingHistoricalDataOn: (state, action) => {
      state.loadingHistoricalData = action.payload.loading;
      state.status = action.type;
    },
    setLoadingHistoricalDataOff: (state, action) => {
      state.loadingHistoricalData = action.payload.loading;
      state.status = action.type;
    },
    pageFundsLoaded: (state, action) => {
        state.status = action.type;
    },
    pageFundLoaded: (state, action) => {
      state.status = action.type;
    },
    pageHistoricalDataLoaded: (state, action) => {
      state.status = action.type;
    },

  },
});

// Action creators are generated for each case reducer function
export const { 
  setLoadingOn,
  setLoadingOff,
  pageFundsLoaded,
  pageFundLoaded,
  pageHistoricalDataLoaded,
  setLoadingFundInfoOn,
  setLoadingFundInfoOff,
  setLoadingHistoricalDataOn,
  setLoadingHistoricalDataOff
 } = uiSlice.actions

export default uiSlice.reducer

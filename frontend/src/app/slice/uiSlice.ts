
import { createSlice } from '@reduxjs/toolkit';



export interface Ui {
    loading: boolean
    loadingFundInfo: boolean
    status: string
}

const initialState: Ui = {
  loading: true,
  loadingFundInfo: true,
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
    pageLoaded: (state, action) => {
        state.status = action.type;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setLoadingOn, setLoadingOff, pageLoaded, setLoadingFundInfoOn, setLoadingFundInfoOff } = uiSlice.actions

export default uiSlice.reducer

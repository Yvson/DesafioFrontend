import { 
    loadFundsFailure,
    loadFundsSuccess,
    loadFundInfoSuccess,
    loadHistoricalDataSuccess,
    loadHistoricalDataFailure,
} from "../slice/fundsSlice";
import { 
    setLoadingOn,
    setLoadingOff,
    setLoadingFundInfoOn,
    setLoadingFundInfoOff,
    setLoadingHistoricalDataOn,
    setLoadingHistoricalDataOff,
 } from '../slice/uiSlice';
import { LOAD_FUNDS, LOAD_FUND_INFO, LOAD_HISTORICAL_DATA } from "../action/funds";
import axios from "axios";


export const loadFundsFlow = (store:any) => (next:any) => async (action:any) => {

    switch(action.type) {
        case LOAD_FUNDS:
            try {
                store.dispatch(setLoadingOn({loading: true}));
                const funds = await axios.get('/api/funds');
                store.dispatch(loadFundsSuccess({allFunds: funds.data}));
                store.dispatch(setLoadingOff({loading: false}));
            } catch (error:any) {
                store.dispatch(loadFundsFailure({error: error}));
            }
            break;
        case LOAD_FUND_INFO:
            try {
                store.dispatch(setLoadingFundInfoOn({loading: true}));
                const fundInfo = await axios.get(`/api/funds/${action.payload.fundId}`);
                store.dispatch(loadFundInfoSuccess({fundInfo: fundInfo.data}));
                store.dispatch(setLoadingFundInfoOff({loading: false}));
            } catch (error:any) {
                store.dispatch(loadFundsFailure({error: error}));
            }
            break;
        case LOAD_HISTORICAL_DATA:
            try {
                store.dispatch(setLoadingHistoricalDataOn({loading: true}));
                const historicalData = await axios.get(`/api/funds/historicaldata/${action.payload.fundId}`);
                store.dispatch(loadHistoricalDataSuccess({historicalData: historicalData.data}));
                store.dispatch(setLoadingHistoricalDataOff({loading: false}));
            } catch (error:any) {
                store.dispatch(loadHistoricalDataFailure({error: error}));
            }
            break;
        
    }

    let result = next(action);
    
    return result;
}


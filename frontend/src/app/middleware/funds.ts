import { 
    loadFundsFailure,
    loadFundsSuccess,
    loadFundInfoSuccess,
} from "../slice/fundsSlice";
import { setLoadingOn, setLoadingOff, setLoadingFundInfoOn, setLoadingFundInfoOff } from '../slice/uiSlice';
import { LOAD_FUNDS, LOAD_FUND_INFO } from "../action/funds";
import axios from "axios";


export const loadFundsFlow = (store:any) => (next:any) => async (action:any) => {

    if (action.type === LOAD_FUNDS) {

        try {
            store.dispatch(setLoadingOn({loading: true}));
            const funds = await axios.get('/api/funds');
            store.dispatch(loadFundsSuccess({allFunds: funds.data}));
            store.dispatch(setLoadingOff({loading: false}));
        } catch (error:any) {
            store.dispatch(loadFundsFailure({error: error}));
        }
    } else if (action.type === LOAD_FUND_INFO) {

        try {
            store.dispatch(setLoadingFundInfoOn({loading: true}));
            const fundInfo = await axios.get(`/api/funds/${action.payload.fundId}`);
            store.dispatch(loadFundInfoSuccess({fundInfo: fundInfo.data}));
            store.dispatch(setLoadingFundInfoOff({loading: false}));
        } catch (error:any) {
            store.dispatch(loadFundsFailure({error: error}));
        }
    }

    let result = next(action);
    
    return result;
}


import { 
    loadFundsFailure,
    loadFundsSuccess,
    loadFundInfoSuccess,
} from "../slice/fundsSlice";
import { setLoadingOn, setLoadingOff, setLoadingFundInfoOn, setLoadingFundInfoOff } from '../slice/uiSlice';
import { LOAD_FUNDS, LOAD_FUND_INFO } from "../action/funds";
import api from '../../services/api'


export const loadFundsFlow = (store:any) => (next:any) => async (action:any) => {

    if (action.type === LOAD_FUNDS) {

        try {
            store.dispatch(setLoadingOn({loading: true}));
            const funds = await api.getAllFunds();
            store.dispatch(loadFundsSuccess({allFunds: funds}));
            store.dispatch(setLoadingOff({loading: false}));
        } catch (error:any) {
            store.dispatch(loadFundsFailure({error: error}));
        }
    } else if (action.type === LOAD_FUND_INFO) {

        try {
            store.dispatch(setLoadingFundInfoOn({loading: true}));
            const fundInfo = await api.getFundById(action.payload.fundId);
            store.dispatch(loadFundInfoSuccess({fundInfo: fundInfo}));
            store.dispatch(setLoadingFundInfoOff({loading: false}));
        } catch (error:any) {
            store.dispatch(loadFundsFailure({error: error}));
        }
    }

    let result = next(action);
    
    return result;
}


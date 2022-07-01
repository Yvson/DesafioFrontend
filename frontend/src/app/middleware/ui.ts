import { PAGE_FUNDS_LOADED, PAGE_FUND_LOADED, PAGE_HISTORICAL_DATA_LOADED } from "../action/ui";
import { loadFunds, loadFundInfo, loadHistoricalData }  from '../slice/fundsSlice';


export const pageLoadedFlow = (store:any) => (next:any) => (action:any) => {

    switch (action.type) {
        case PAGE_FUNDS_LOADED:
            return store.dispatch(loadFunds({status: 'loading'}));
        case PAGE_FUND_LOADED:
            return store.dispatch(loadFundInfo({status: 'loading', fundId:action.payload.fundId}));
        case PAGE_HISTORICAL_DATA_LOADED:
            return store.dispatch(loadHistoricalData({status: 'loading', fundId:action.payload.fundId}));
    }

    let result = next(action);

    return result
}

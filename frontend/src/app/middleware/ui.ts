import { PAGE_LOADED } from "../action/ui";
import { loadFunds, loadFundInfo }  from '../slice/fundsSlice';


export const pageLoadedFlow = (store:any) => (next:any) => (action:any) => {


    if (action.type === PAGE_LOADED) {
        if (action.payload.fundId) {
            return store.dispatch(loadFundInfo({status: 'loading', fundId:action.payload.fundId}));
        }
        return store.dispatch(loadFunds({status: 'loading'}));
    }    

    let result = next(action);

    return result
}

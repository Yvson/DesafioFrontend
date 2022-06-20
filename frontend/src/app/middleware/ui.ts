import { PAGE_LOADED } from "../action/ui";
import { loadFunds, loadFundInfo }  from '../slice/fundsSlice';


export const pageLoadedFlow = (store:any) => (next:any) => (action:any) => {


    if (action.type === PAGE_LOADED) {
        if (action.payload.fundId) {
            store.dispatch(loadFundInfo({status: 'loading', }));
        }
        store.dispatch(loadFunds({status: 'loading'}));
    }    

    let result = next(action);

    return result
}

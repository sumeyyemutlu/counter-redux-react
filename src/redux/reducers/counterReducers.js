import * as actionTypes from '../actions/actionTypes'

const counterReducer = (state=0, action) =>{//state tanımsız olmaması için ilk değerini verdik
    let newState ;//arrayin bir kopyasını, referansını oluşturduk onun üstünde işlemn
    switch(action.type) {
        case actionTypes.INCREASE_COUNTER:
            return (newState = state + action.payload);
        case actionTypes.DECREASE_COUNTER:
            return (newState = state - action.payload);
        case actionTypes.INCREASE_BY_TWO_COUNTER:
            return (newState = state + action.payload);
        default:
            return state;
    }
}
export default counterReducer;
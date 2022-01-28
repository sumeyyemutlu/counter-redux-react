import  {combineReducers} from "redux";
import counterReducer from "./counterReducers";

const reducers = combineReducers({ //reducerları birleştir metodu
    combineReducers // bu aslısrcnda combineReducers:combineReducers demek aynı isim olduğu içn böyle verdik. 
})
export default reducers;
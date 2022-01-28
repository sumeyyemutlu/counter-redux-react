import  {combineReducers} from "redux";
import counterReducer from "./counterReducers";

const reducers = combineReducers({ //reducerları birleştir metodu. Birleştirip store'a atacağız.
    counterReducer// bu aslında counterReducer:counterReducer demek aynı isim olduğu için böyle verdik. 
})
export default reducers;
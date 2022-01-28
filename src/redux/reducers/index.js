import  {combineReducers} from "redux";
import counterReducer from "./counterReducers";

const reducers = combineReducers({ //reducerları birleştir metodu
    counterReducer// bu aslında counterReducer:counterReducer demek aynı isim olduğu içn böyle verdik. 
})
export default reducers;
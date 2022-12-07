import { combineReducers } from "redux";
import  Reducer from "./reducer";

const Reducers = combineReducers({
    amount: Reducer
})

export default Reducers
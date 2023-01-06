import Increment from "../reducer/Increment";
import Decrement from "../reducer/Decrement";
import Operation from "../reducer/operation";
import { combineReducers } from "redux";

const CombineReducer = combineReducers({
    // increment:Increment,
    // decrement: Decrement,
    operation:Operation
})
export default CombineReducer;
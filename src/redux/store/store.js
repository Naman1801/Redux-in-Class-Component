import CombineReducer from "../combineReducer/combineReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:CombineReducer
});
export default store;
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {productReducer} from "./slices/products.slice";

const rootReducer = combineReducers({
    products: productReducer,
});

export const setupStore = () => configureStore({
    reducer: rootReducer,
});






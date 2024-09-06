import { combineReducers, configureStore } from "@reduxjs/toolkit"
import countryReducer from "./Country/countrySlice"
import productReducer from "./Product/productSlice"
import categoryReducer from "./Category/categorySlice"
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./Authentication/authSlice"

const reducers = combineReducers({
    auth: authReducer,
    country:countryReducer,
    product:productReducer,
    category:categoryReducer,
})

const persistConfig = {
    key:"root",
    storage
}

const persistedReducer = persistReducer(persistConfig,reducers)

const store = configureStore({
    reducer: persistedReducer, 
})

export default store


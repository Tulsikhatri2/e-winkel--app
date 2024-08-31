import { combineReducers, configureStore } from "@reduxjs/toolkit"
import countryReducer from "./Country/countrySlice"
// import countryReducer from "./Countries/countrySlice"
// import productReducer from "./Products/productSlice"
// import categoryReducer from "./Category/categorySlice"
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import authReducer from "./Authentication/authSlice"
// const reducers = combineReducers({
//     user:userReducer,
//     country:countryReducer,
//     product:productReducer,
//     category:categoryReducer
// })

// const persistConfig = {
//     key:"root",
//     storage
// }

// const persistedReducer = persistReducer(persistConfig,reducers)

const store = configureStore({
    // reducer: persistedReducer
    // auth:authReducer,
    // country:countryReducer,
    // product:productReducer,
    // category:categoryReducer
    reducer:{
        auth:authReducer,
        country:countryReducer
    }

})

export default store


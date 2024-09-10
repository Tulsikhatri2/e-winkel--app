import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService";

const productSlice = createSlice({
    name:"product",
    initialState:{
        isLoadingProduct:false,
        isSuccess:false,
        isError:false,
        productList:[],
        
    },
    reducers:{
       
    },
    extraReducers:(builder)=>{
        builder
        .addCase(productsListData.pending,(state,action)=>{
            state.isLoadingProduct = true;
            state.isSuccess = false;
            state.isError = false;
        })
        .addCase(productsListData.fulfilled,(state,action)=>{
            state.isLoadingProduct = false;
            state.isSuccess = true;
            state.isError = false;
            state.productList = action.payload
        })
        .addCase(productsListData.rejected,(state,action)=>{
            state.isLoadingProduct = false;
            state.isSuccess = false;
            state.isError = true
        })
    }
})

export const productsListData = createAsyncThunk(
    "PRODUCTS/DISPLAY",
    async()=>{
        try {
            return await productService.productsList()
        } catch (error) {
            console.log(error," - products error")
        }
    }
)

export default productSlice.reducer
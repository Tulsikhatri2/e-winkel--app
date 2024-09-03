import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService";

const productSlice = createSlice({
    name:"product",
    initialState:{
        isLoadingProduct:false,
        isSuccess:false,
        isError:false,
        allProductsData:[],
        
    },
    reducers:{
       
    },
    extraReducers:(builder)=>{
        builder
        .addCase(productsDataDisplay.pending,(state,action)=>{
            state.isLoadingProduct = true;
            state.isSuccess = false;
            state.isError = false;
        })
        .addCase(productsDataDisplay.fulfilled,(state,action)=>{
            state.isLoadingProduct = false;
            state.isSuccess = true;
            state.isError = false;
            state.allProductsData = action.payload
        })
        .addCase(productsDataDisplay.rejected,(state,action)=>{
            state.isLoadingProduct = false;
            state.isSuccess = false;
            state.isError = true
        })
    }
})

export const productsDataDisplay = createAsyncThunk(
    "PRODUCTS/DISPLAY",
    async()=>{
        try {
            return await productService.productsDisplay()
        } catch (error) {
            console.log(error," - products error")
        }
    }
)

export default productSlice.reducer
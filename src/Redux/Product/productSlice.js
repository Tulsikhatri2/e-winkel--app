import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService";
import { toast } from "react-toastify";

const productSlice = createSlice({
    name:"product",
    initialState:{
        isLoadingProduct:false,
        isSuccess:false,
        isError:false,
        productList:[],
        productDetails : {},
        productID:""
        
    },
    reducers:{
        productDeleteID:(state,action)=>{
            return{
                ...state,
                productID:action.payload
            }
        }
       
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
        .addCase(productDetails.pending,(state,action)=>{
            state.isLoadingProduct = true;
            state.isSuccess = false;
            state.isError = false
        })
        .addCase(productDetails.fulfilled,(state,action)=>{
            state.isLoadingProduct = false;
            state.isSuccess = true;
            state.isError = false;
            state.productDetails = action.payload
        })
        .addCase(productDetails.rejected,(state,action)=>{
            state.isLoadingProduct = false;
            state.isSuccess = false;
            state.isError = true;
        })
    }
})

export const productsListData = createAsyncThunk(
    "PRODUCTS/DISPLAY",
    async()=>{
        try {
            return await productService.productsList()
        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        }
    }
)

export const productDetails = createAsyncThunk(
    "PRODUCT/DETAILS",
    async(id)=>{
        try {
            return await productService.getProductDetails(id)
        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        }
    }
)

export const productDetailsDelete = createAsyncThunk(
    "PRODUCT/DETAILS/DELETE",
    async(id)=>{
        try {
            return await productService.productDelete(id)
        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        }
    }
)

export const addProductData = createAsyncThunk(
    "ADD/PRODUCT/DATA",
    async(productData) => {
        try {
            return await productService.addProduct(productData)
        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        }
    }
)

export const {productDeleteID} = productSlice.actions
export default productSlice.reducer
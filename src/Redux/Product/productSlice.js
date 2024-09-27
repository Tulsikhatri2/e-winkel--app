import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService, { productUpdate } from "./productService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



const productSlice = createSlice({
    name:"product",
    initialState:{
        isLoadingProduct:false,
        isSuccess:false,
        isError:false,
        productList:[],
        productDetails : {},
        productID:"",
        editProduct:{productDetails:{}, isEdit:false},
        editedProductData:{}
    },
    reducers:{
        productDeleteID:(state,action)=>{
            return{
                ...state,
                productID:action.payload
            }
        },
        updateProduct:(state,action)=>{
            return{
                ...state,
                editProduct:
                {
                    productDetails:action.payload, 
                    isEdit:true
                }
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
        .addCase(productData.pending,(state,action)=>{
            state.isLoadingProduct = true;
            state.isSuccess = false;
            state.isError = false
        })
        .addCase(productData.fulfilled,(state,action)=>{
            state.isLoadingProduct = false;
            state.isSuccess = true;
            state.isError = false;
            state.productDetails = action.payload
        })
        .addCase(productData.rejected,(state,action)=>{
            state.isLoadingProduct = false;
            state.isSuccess = false;
            state.isError = true;
        })
        .addCase(productDataEdit.pending,(state,action)=>{
            state.isLoadingProduct= true;
            state.isError = false;
            state.isSuccess = false;
        })
        .addCase(productDataEdit.fulfilled,(state,action)=>{
            state.isLoadingProduct = false;
            state.isSuccess = true;
            state.editedProductData = action.payload;
            state.isError = false;
        })
        .addCase(productDataEdit.rejected,(state,action)=>{
            state.isLoadingProduct = false;
            state.isSuccess = false;
            state.isError = true
        })
        .addCase(productDetailsDelete.pending,(state,action)=> {
            state.isLoadingProduct = true;
            state.isSuccess = false;
            state.isError = false;
        })
        .addCase(productDetailsDelete.fulfilled,(state,action)=>{
            state.isLoadingProduct = false;
            state.isSuccess = true;
            state.isError = false;
        })
        .addCase(productDetailsDelete.rejected,(state,action)=>{
            state.isLoadingProduct = false;
            state.isSuccess = false;
            state.isError = true
        })
        .addCase(addProductData.pending,(state,action)=> {
            state.isLoadingProduct = true;
            state.isSuccess = false;
            state.isError = false;
        })
        .addCase(addProductData.fulfilled,(state,action)=> {
            state.isLoadingProduct = false;
            state.isSuccess = true;
            state.isError = false;
        })
        .addCase(addProductData.rejected,(state,action)=>{
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
            toast.error(error.response?.data?.message || error.message)
        }
    }
)

export const productData = createAsyncThunk(
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
            const response = await productService.addProduct(productData)
            toast.success("Product Added.!!")
            return response
        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        }
    }
)

export const productDataEdit = createAsyncThunk(
    "PRODUCT/DATA/EDIT",
    async(productEditData) => {
        try {
            const resposne = await productService.productUpdate(productEditData)
            toast.success("Product Edited Successfully")
            return resposne
        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        }
    }
)

export const {productDeleteID, updateProduct} = productSlice.actions
export default productSlice.reducer
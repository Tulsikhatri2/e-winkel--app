import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { categoryCreate, categoryDataDisplay, singleCategoryDisplay } from "./categoryService";

const categorySlice = createSlice({
    name:"category",
    initialState:{
        allCategoryData:[],
        isLoading:false,
        isSuccess:false,
        isError:false,
        errorMessage:"",
        singleCategory:{}
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(displayingCategories.pending,(state,action) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false
        })
        .addCase(displayingCategories.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.allCategoryData = action.payload;
            state.isError = false
        })
        .addCase(displayingCategories.rejected,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
        })
        .addCase(singleCategoryData.pending,(state,action)=>{
            state.isLoading = true;
            state.isError = false;
            state.isSuccess = false;
        })
        .addCase(singleCategoryData.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.singleCategory = action.payload
        })
        .addCase(singleCategoryData.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
        })
    }
})

export const creatingCategory = createAsyncThunk(
    "CREATE/CATEGORY",
    async (data)=>{
        try {
            return await categoryCreate(data)
        } catch (error) {
            console.log(error.message,"error from create category")
        }
    }
)

export const displayingCategories = createAsyncThunk(
    "DISPLAY/CATEGORIES",
    async (token) =>{
        try {
            return await categoryDataDisplay(token)
        } catch (error) {
            
        }
    }
)

export const singleCategoryData = createAsyncThunk(
    "DISPLAY/SINGLE/CATEGORY",
    async (categoryInfo) => {
        try {
            return await singleCategoryDisplay(categoryInfo)
        } catch (error) {
            
        }
    }
)

export default categorySlice.reducer
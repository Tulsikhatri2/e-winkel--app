import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryService from "./categoryService";

const categorySlice = createSlice({
    name:"category",
    initialState:{
        categoryList:[],
        isLoadingData:false,
        isSuccess:false,
        isError:false,
        errorMessage:"",
        categoryDetails:{},
        edit:{
            category:{}, 
            isEdit:false}
    },
    reducers:{
        editCategory:(state,action)=>{
            return{
                ...state,
                edit:{
                    category:action.payload,
                    isEdit:true}
            }
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(categoryListData.pending,(state,action) => {
            state.isLoadingData = true;
            state.isSuccess = false;
            state.isError = false
        })
        .addCase(categoryListData.fulfilled,(state,action)=>{
            state.isLoadingData = false;
            state.isSuccess = true;
            state.categoryList = action.payload;
            state.isError = false
        })
        .addCase(categoryListData.rejected,(state,action)=>{
            state.isLoadingData = false;
            state.isSuccess = false;
            state.isError = true;
        })
        .addCase(categoryData.pending,(state,action)=>{
            state.isLoadingData = true;
            state.isError = false;
            state.isSuccess = false;
        })
        .addCase(categoryData.fulfilled,(state,action)=>{
            state.isLoadingData = false;
            state.isSuccess = true;
            state.isError = false;
            state.categoryDetails = action.payload
        })
        .addCase(categoryData.rejected,(state,action)=>{
            state.isLoadingData = false;
            state.isError = true;
            state.isSuccess = false;
        })
        .addCase(categoryDataUpdate.pending,(state,action)=>{
            state.isLoadingData = true;
            state.isSuccess = false;
            state.isError = false;
        })
        .addCase(categoryDataUpdate.fulfilled,(state,action)=>{
            state.isLoadingData = false;
            state.isSuccess = true;
            state.isError = false
        })
        .addCase(categoryDataUpdate.rejected,(state,action)=>{
            state.isLoadingData = false;
            state.isSuccess = false;
            
        })
        .addCase(creatingCategory.pending,(state,action)=>{
            state.isLoadingData = true;
            state.isSuccess = false;
            state.isError = false
        })
        .addCase(creatingCategory.fulfilled,(state,action)=>{
            state.isLoadingData = false;
            state.isSuccess = true;
            state.isError = false
        })
        .addCase(creatingCategory.rejected,(state,action)=>{
            state.isLoadingData = false;
            state.isSuccess = false;
            state.isError = true
        })
    }
})

export const creatingCategory = createAsyncThunk(
    "CREATE/CATEGORY",
    async (data)=>{
        try {
            return await categoryService.categoryCreate(data)
        } catch (error) {
            console.log(error.message,"error from create category")
        }
    }
)

export const categoryListData = createAsyncThunk(
    "DISPLAYING/CATEGORIES",
    async () =>{
        try {
            return await categoryService.categoryListDetails()
        } catch (error) {
            console.log(error.message,"- category display error")
        }
    }
)

export const categoryData = createAsyncThunk(
    "DISPLAY/SINGLE/CATEGORY",
    async (id) => {
        try {
            return await categoryService.categoryDataDetails(id)
        } catch (error) {
            
        }
    }
)

export const categoryDataUpdate = createAsyncThunk(
    "UPDATE/CATEGORY/DATA",
    async (editedData) => {
        try {
            return await categoryService.updateCategory(editedData)
        } catch (error) {
            
        }
    }
)

export const {editCategory} = categorySlice.actions

export default categorySlice.reducer
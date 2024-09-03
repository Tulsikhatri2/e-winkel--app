import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryService from "./categoryService";

const categorySlice = createSlice({
    name:"category",
    initialState:{
        allCategoryData:[],
        isLoadingData:false,
        isSuccess:false,
        isError:false,
        errorMessage:"",
        singleCategory:{},
        edit:{category:{}, isEdit:false}
    },
    reducers:{
        editCategory:(state,action)=>{
            return{
                ...state,
                edit:{category:action.payload,
                    isEdit:true
                }
            }
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(displayingCategories.pending,(state,action) => {
            state.isLoadingData = true;
            state.isSuccess = false;
            state.isError = false
        })
        .addCase(displayingCategories.fulfilled,(state,action)=>{
            state.isLoadingData = false;
            state.isSuccess = true;
            state.allCategoryData = action.payload;
            state.isError = false
        })
        .addCase(displayingCategories.rejected,(state,action)=>{
            state.isLoadingData = false;
            state.isSuccess = false;
            state.isError = true;
        })
        .addCase(singleCategoryDetails.pending,(state,action)=>{
            state.isLoadingData = true;
            state.isError = false;
            state.isSuccess = false;
        })
        .addCase(singleCategoryDetails.fulfilled,(state,action)=>{
            state.isLoadingData = false;
            state.isSuccess = true;
            state.isError = false;
            state.singleCategory = action.payload
        })
        .addCase(singleCategoryDetails.rejected,(state,action)=>{
            state.isLoadingData = false;
            state.isError = true;
            state.isSuccess = false;
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

export const displayingCategories = createAsyncThunk(
    "DISPLAYING/CATEGORIES",
    async () =>{
        try {
            return await categoryService.categoryDataDisplay()
        } catch (error) {
            console.log(error.message,"- category display error")
        }
    }
)

export const singleCategoryDetails = createAsyncThunk(
    "DISPLAY/SINGLE/CATEGORY",
    async (id) => {
        try {
            return await categoryService.singleCategoryDisplay(id)
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
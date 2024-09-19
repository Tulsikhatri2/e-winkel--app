import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cities, countries, states } from "./countryService";
import { toast } from "react-toastify";


const countrySlice = createSlice({
  name: "country",
  initialState: {
    countries: [],
    states: [],
    cities: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage:"",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(countryList.pending,(state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;    
    })
    .addCase(countryList.fulfilled,(state,action)=>{
        state.countries = action.payload;
        state.isSuccess = true;
        state.isError = false;
        state.isLoading = false;
    })
    .addCase(countryList.rejected,(state,action)=>{
      state.isSuccess = false;
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    })
    .addCase(statesList.pending,(state)=>{
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    })
    .addCase(statesList.fulfilled,(state,action)=>{
      state.states = action.payload
      state.isSuccess = true;
      state.isLoading = false;
      state.isError = false;
    })
    .addCase(statesList.rejected,(state,action)=>{
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.errorMessage = action.payload;
    })
    .addCase(citiesList.pending,(state,action)=>{
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    })
    .addCase(citiesList.fulfilled,(state,action)=>{
      state.isSuccess = true;
      state.cities = action.payload;
      state.isLoading = false;
      state.isError = false;
    })
    .addCase(citiesList.rejected,(state,action)=>{
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    })
  },
});

export const countryList = createAsyncThunk("COUNTRY/DISPLAY", async () => {
  try {
    return await countries();
  } catch (error) {
    toast.error(error.response?.data?.message || error.message)
  }
});

export const statesList = createAsyncThunk("STATES/DISPLAY", async (coutryCode) => {
  try {
    return await states(coutryCode)
  } catch (error) {
    toast.error(error.response?.data?.message || error.message)
}
});

export const citiesList = createAsyncThunk("CITIES/DISPLAY", async (stateCode) => {
  try {
    return await cities(stateCode)
  } catch (error) {
    toast.error(error.response?.data?.message || error.message)
  }
})

export default countrySlice.reducer;

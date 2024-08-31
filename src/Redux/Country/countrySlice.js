import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cities, countries, states } from "./countryService";


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
    .addCase(countryDisplay.pending,(state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;    
    })
    .addCase(countryDisplay.fulfilled,(state,action)=>{
        state.countries = action.payload;
        state.isSuccess = true;
        state.isError = false;
        state.isLoading = false
    })
    .addCase(countryDisplay.rejected,(state,action)=>{
      state.isSuccess = false;
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload
    })
    .addCase(statesDisplay.pending,(state)=>{
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false
    })
    .addCase(statesDisplay.fulfilled,(state,action)=>{
      state.states = action.payload
      state.isSuccess = true;
      state.isLoading = false;
      state.isError = false;
    })
    .addCase(statesDisplay.rejected,(state,action)=>{
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.errorMessage = action.payload
    })
    .addCase(citiesDisplay.pending,(state,action)=>{
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    })
    .addCase(citiesDisplay.fulfilled,(state,action)=>{
      state.isSuccess = true;
      state.cities = action.payload;
    })
  },
});

export const countryDisplay = createAsyncThunk("COUNTRY/DISPLAY", async () => {
  try {
    return await countries();
  } catch (error) {
    console.log(error.message, "error");
  }
});

export const statesDisplay = createAsyncThunk("STATES/DISPLAY", async () => {
  try {
    return await states()
  } catch (error) {
    console.log(error.message,"error")
  }
})

export const citiesDisplay = createAsyncThunk("CITIES/DISPLAY", async () => {
  try {
    return await cities()
  } catch (error) {
    console.log(error.message,"error")
  }
})

export default countrySlice.reducer;

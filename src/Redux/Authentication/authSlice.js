import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authServices from "./authService";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userSignupData: null,
    userLoginData: {},
    userToken:null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: "",
    isVerification:false,
    emailVerificationMessage:{verificationMessage:"", isSuccess:false},
    allUsersData : [],
    singleUserData:{},
    editUser:false,
    edit:{ user:{} , isEdit:false }
  },
  reducers: {
    clearUserSignupData: (state) => {
      state.userSignupData = null;
      
    },
    clearVerificationData:(state,action)=>{
      state.emailVerificationMessage = null
    }
  },
  extraReducers:(builder)=>{
    builder
    .addCase(loginUser.pending,(state,action)=>{
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    })
    .addCase(loginUser.fulfilled,(state,action)=>{
      state.userLoginData = action.payload
      state.userToken = action.payload?.token
      localStorage.setItem("token",action.payload?.token)
      state.isSuccess = true;
      state.isLoading = false;
      state.isError = false;
    })
    .addCase(loginUser.rejected,(state,action)=>{
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    })
    .addCase(signupUser.pending,(state,action)=>{
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    })
    .addCase(signupUser.fulfilled,(state,action)=>{
      state.isSuccess = true;
      state.userSignupData = action.payload;
      state.isLoading = false;
      state.isError = false;
    })
    .addCase(signupUser.rejected,(state,action)=>{
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.errorMessage = action.payload
    })
    .addCase(emailVerificationProcess.pending,(state,action)=>{
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false
    })
    .addCase(emailVerificationProcess.fulfilled,(state,action)=>{
      state.isLoading = false;
      state.isError = false;
      state.emailVerificationMessage = {verificationMessage:action.payload, isSuccess:true}
    })
    .addCase(emailVerificationProcess.rejected,(state,action)=>{
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.errorMessage = action.payload
    })
    .addCase(userDisplay.pending,(state,action)=>{
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false
    })
    .addCase(userDisplay.fulfilled,(state,action)=>{
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.allUsersData = action.payload
    })
    .addCase(userDisplay.rejected,(state,action)=>{
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    })
    .addCase(singleData.pending,(state,action)=>{
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    })
    .addCase(singleData.fulfilled,(state,action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.singleUserData = action.payload
    })
    .addCase(singleData.rejected,(state,action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    })
  }
});

export const loginUser = createAsyncThunk(
  "USER/LOGIN",
  async (user)=>{
    try {
      return await authServices.userLogin(user)
    } catch (error) {
      console.log(error.message,"- user Error")
    }
  }
)

export const signupUser = createAsyncThunk(
  "USER/SIGNUP",
  async (signupData) => {
    try {
      return await authServices.userSignup(signupData)
    } catch (error) {
      console.log(error.message,"- singup error")
    }
  }
)

export const passwordForgot = createAsyncThunk(
  "FORGOT/PASSWORD",
  async (userEmail) => {
    try {
      return await authServices.forgotPassword(userEmail)
    } catch (error) {
      console.log(error.message,"forgot password error")
    }
  }
)

export const emailVerificationProcess = createAsyncThunk(
  "USER/EMAIL/VERIFICATION",
  async (verificationData) => {
    try {
      return await authServices.emailVerification(verificationData)
    } catch (error) {
      console.log(error.message,"- verification error")
    }
  }
)

export const userDisplay = createAsyncThunk(
  "USER/DISPLAY",
  async () => {
    try {
      return await authServices.userDataDisplay()
    } catch (error) {
      console.log(error.message,"- user data error")
    }
  }
)

export const deletingUser = createAsyncThunk(
  "USER/DELETE",
  async(id) => {
    try {
      return await authServices.deleteUser(id)
    } catch (error) {
      console.log(error.message,"- user deleting error")
    }
  }
)

export const singleData = createAsyncThunk(
  "SINGLE/USER",
  async(id)=>{
    try {
      return await authServices.singleUserData(id)
    } catch (error) {
    
    }
  }
)

export const {afterDispatch, clearUserSignupData, clearVerificationData} = authSlice.actions;

export default authSlice.reducer;

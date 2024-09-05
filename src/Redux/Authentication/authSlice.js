import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authServices from "./authService";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userSignupData:{},
    userLoginData: {},
    userToken:"",
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: "",
    isVerification:false,
    emailVerificationMessage:"",
    allUsersData : [],
    singleUserData:{},
    editUser:false,
    edit:{ user:{} , isEdit:false }
  },
  reducers: {},
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
      localStorage.setItem("token",action.payload.token)
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
      state.isSuccess = true;
      state.emailVerificationMessage = action.payload
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

// export const userPasswordForgot = createAsyncThunk(
//   "USER/FORGOT/PASSWORD",
//   async (userEmail) => {
//     try {
//       return await forgotPassword(userEmail)
//     } catch (error) {
//       console.log(error.message,"forgot password error")
//     }
//   }
// )

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


export default userSlice.reducer;

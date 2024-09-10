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
    usersList : [],
    userDetails:{},
    editUser:false,
    edit:{ 
      user:{} , 
      isEdit:false },
    
  },
  reducers: {
    clearUserSignupData: (state) => {
      state.userSignupData = null;
      
    },
    logoutUser:(state)=>{
      state.userToken = null
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
      state.isError = false;
    })
    .addCase(emailVerificationProcess.fulfilled,(state,action)=>{
      state.isLoading = false;
      state.isError = false;
      state.isVerification = true;
      state.emailVerificationMessage = action.payload;
    })
    .addCase(emailVerificationProcess.rejected,(state,action)=>{
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.errorMessage = action.payload
    })
    .addCase(userListData.pending,(state,action)=>{
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    })
    .addCase(userListData.fulfilled,(state,action)=>{
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.usersList = action.payload
    })
    .addCase(userListData.rejected,(state,action)=>{
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    })
    .addCase(userData.pending,(state,action)=>{
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    })
    .addCase(userData.fulfilled,(state,action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.userDetails = action.payload
    })
    .addCase(userData.rejected,(state,action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    })
    .addCase(deletingUser.pending,(state,action)=>{
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    })
    .addCase(deletingUser.fulfilled,(state,action)=>{
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
    })
    .addCase(deletingUser.rejected,(state,action)=>{
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    })
    .addCase(resetUserPassword.pending,(state,action)=>{
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    })
    .addCase(resetUserPassword.fulfilled,(state,action)=>{
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
    })
    .addCase(resetUserPassword.rejected,(state,action)=>{
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
    })
    .addCase(loginWithGoogle.pending,(state,action)=>{
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    })
    .addCase(loginWithGoogle.fulfilled,(state,action)=>{
      state.isLoading = false;
      state.isSuccess = true;
      state.userToken = action.payload.token;
      state.userLoginData = action.payload;
      localStorage.setItem("token",action.payload?.token)
      state.isError = false
    })
    .addCase(loginWithGoogle.rejected,(state,action)=>{
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true
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

export const userListData = createAsyncThunk(
  "USER/DISPLAY",
  async () => {
    try {
      return await authServices.userList()
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

export const userData = createAsyncThunk(
  "SINGLE/USER",
  async(id)=>{
    try {
      return await authServices.userInformation(id)
    } catch (error) {
    
    }
  }
)

export const resetUserPassword = createAsyncThunk(
  "RESET/USER/PASSWORD",
  async(resetData)=>{
    try {
      return await authServices.resetPassword(resetData)
    } catch (error) {
      
    }
  }
)

export const loginWithGoogle = createAsyncThunk(
  "GOOGLE/LOGIN",
  async(credential)=>{
    try {
      return await authServices.googleLogin(credential)
    } catch (error) {
      
    }
  }
)

export const { clearUserSignupData, logoutUser} = authSlice.actions;

export default authSlice.reducer;

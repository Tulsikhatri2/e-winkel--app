import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authServices from "./authService";
import { toast } from "react-toastify";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userSignupData: null,
    userLoginData: null,
    userToken:null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: "",
    isVerification:null,
    usersList : [],
    userDetails:{},
    editUser:false,
    edit:{ 
      user:{} , 
      isEdit:false },
    activeButton:"",
    userID:""
  },
  reducers: {
    clearUserSignupData: (state) => {
      state.userSignupData = null;
      state.isVerification = null;
    },
    logoutUser:(state)=>{
      state.userToken = null
    },
    editUserData:(state,action)=>{
      return{
        ...state,
        edit:{user: action.payload, isEdit:true}
      }
    },
    buttonActiveStyle:(state,action)=>{
      return{
        ...state,
        activeButton:action.payload
      }
    },
    deleteUserData:(state,action)=>{
      const users = state.usersList.filter(item=> item.id != action.payload)
      return{
        ...state,
        usersList: users
      }
    },
    deleteUserId:(state,action)=>{
      return{
        ...state,
        userID: action.payload
      }
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
      state.isVerification = action.payload;
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
      state.usersList = action.payload.data
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
      state.userToken = action.payload?.token;
      state.userLoginData = action.payload;
      localStorage.setItem("token",action.payload?.token)
      state.isError = false
    })
    .addCase(loginWithGoogle.rejected,(state,action)=>{
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true
    })
    .addCase(passwordForgot.pending,(state,action)=>{
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
    })
    .addCase(passwordForgot.fulfilled,(state,action)=>{
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
    })
    .addCase(passwordForgot.rejected,(state,action)=>{
      state.isLoading = false;
      state.isError = true;
      state.isSuccess = false;
    })
    .addCase(updateUser.pending,(state,action)=>{
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
    })
    .addCase(updateUser.fulfilled,(state,action)=>{
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
    })
    .addCase(updateUser.rejected,(state,action)=>{
      state.isError = true;
      state.isSuccess = false;
      state.isLoading = false;
    })
  }
});

export const loginUser = createAsyncThunk(
  "USER/LOGIN",
  async (user)=>{
    try {
      const response =  await authServices.userLogin(user)
      toast.success("Logged in succesfully",{
        autoClose: 2000,
      });
      return response
    } catch (error) {
      toast.error(error.response?.data?.message || error.message,{
        autoClose: 2000,
      })
    }
  }
)

export const signupUser = createAsyncThunk(
  "USER/SIGNUP",
  async (signupData) => {
    try {
      const response = await authServices.userSignup(signupData)
      toast.success("Registered succesfully",{
        autoClose: 2000,
      });
      return response
    } catch (error) {
      toast.error(error.response?.data?.message || error.message,{
        autoClose: 2000,
      })
    }
  }
)

export const passwordForgot = createAsyncThunk(
  "FORGOT/PASSWORD",
  async (userEmail) => {
    try {
      const response = await authServices.forgotPassword(userEmail)
      toast.success("Reset password link sent on your entered email",{
        autoClose: 2000,
      });
      return response
    } catch (error) {
      toast.error(error.response?.data?.message || error.message,{
        autoClose: 2000,
      })
    }
  }
)

export const emailVerificationProcess = createAsyncThunk(
  "USER/EMAIL/VERIFICATION",
  async (verificationData) => {
    try {
      const response = await authServices.emailVerification(verificationData)
      toast.success("Email Verified Successfully",{
        autoClose: 2000,
      });
      return response
    } catch (error) {
      toast.error(error.response?.data?.message || error.message,{
        autoClose: 2000,
      })
    }
  }
)

export const userListData = createAsyncThunk(
  "USER/DISPLAY",
  async () => {
    try {
      return await authServices.userList()
    } catch (error) {
      toast.error(error.response?.data?.message || error.message,{
        autoClose: 2000,
      })
    }
  }
)

export const deletingUser = createAsyncThunk(
  "USER/DELETE",
  async(id) => {
    try {
      const response = await authServices.deleteUser(id)
      toast.success("User Deleted Successfully",{
        autoClose: 2000,
      });
      return response
    } catch (error) {
      toast.error(error.response?.data?.message || error.message,{
        autoClose: 2000,
      })
    }
  }
)

export const userData = createAsyncThunk(
  "SINGLE/USER",
  async(id)=>{
    try {
      return await authServices.userInformation(id)
    } catch (error) {
      toast.error(error.response?.data?.message || error.message,{
        autoClose: 2000,
      })
    }
  }
)

export const resetUserPassword = createAsyncThunk(
  "RESET/USER/PASSWORD",
  async(resetData)=>{
    try {
      const response = await authServices.resetPassword(resetData)
      toast.success("Successfully Updated Password",{
        autoClose: 2000,
      });
      return response
    } catch (error) {
      toast.error(error.response?.data?.message || error.message,{
        autoClose: 2000,
      })
    }
  }
)

export const loginWithGoogle = createAsyncThunk(
  "GOOGLE/LOGIN",
  async(credential)=>{
    try {
      const response = await authServices.googleLogin(credential)
      toast.success("Logged in succesfully",{
        autoClose: 2000,
      });
      return response
    } catch (error) {
      toast.error(error.response?.data?.message || error.message,{
        autoClose: 2000,
      })
    }
  }
)

export const updateUser = createAsyncThunk(
  "UPDATE/USER",
  async(updatedData) => {
    try {
      const response = await authServices.editUser(updatedData)
      toast.success("User updated succesfully",{
        autoClose: 2000,
      });
      return response
    } catch (error) {
      toast.error(error.response?.data?.message || error.message,{
        autoClose: 2000,
      })
    }
  }
) 

export const { clearUserSignupData, logoutUser, editUserData, buttonActiveStyle, deleteUserData, deleteUserId} = authSlice.actions;

export default authSlice.reducer;

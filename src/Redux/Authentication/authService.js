import axiosInstance from "../axiosInterceptors";


const userLogin = async (userData) => {
    const response = await axiosInstance.post("/user/login",userData)
    return response.data.data
}
 const userSignup = async (sigupInfo) => {
    const response = await axiosInstance.post("/user",sigupInfo)
    console.log(response.data.data)
    return response.data.data
}

const forgotPassword = async (userEmail) => {
    const response = await axiosInstance.post("/user/forgot-password",userEmail)
    console.log(response,"forgot password response")
    return response
}

 const emailVerification = async (verificationData) => {
    const {id , token} = verificationData
    const response = await axiosInstance.get("/user/email/verification?token=" + token + "&userId=" + id)
    console.log(response,"verification response")
    return response.data.message
} 

 const userList = async () =>{
    const response = await axiosInstance.get(`/user?pageNumber=1&pageSize=100`)
    return response.data
}

 const deleteUser = async (id) => {
    const response = await axiosInstance.delete(`/user/${id}`)
    console.log(response,"deleting response")
}

 const userInformation = async (id) => {
    const response = await axiosInstance.get(`/user/${id}`)
    return response.data.user
}

const resetPassword = async(data) =>{
    const response = await axiosInstance.post(`/user/reset-password`,data)
    console.log(response,"service response")
}

const googleLogin = async(credential) => {
    const response = await axiosInstance.post("/user/google-login",credential)
    console.log(response)
    return response.data.data
}

const editUser = async(updatedData) => {
    const {id,name,email,password} = updatedData
    const response = await axiosInstance.put(`/user/${id}`,{
        name:name,
        email:email,
        password:password
    })
    console.log(response.data.message,"user edit response")
}


const authServices = {
    userLogin, userSignup, emailVerification, userList, userInformation,deleteUser, forgotPassword, resetPassword, googleLogin, editUser
}

export default authServices
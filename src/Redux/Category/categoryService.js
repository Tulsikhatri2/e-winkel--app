import axiosInstance from "../axiosInterceptors"

export const categoryCreate = async(categoryData) => {
    const response = await axiosInstance.post("/category",categoryData)
    console.log(response, "response from service")
}

export const categoryListDetails = async() => {
    const response = await axiosInstance.get("/category?pageNumber=1&pageSize=40")
    return response.data.data
}

export const categoryDataDetails = async(id) => {
    const response = await axiosInstance.get(`/category/${id}`)
    return response.data.details
}

export const updateCategory = async(editedData) => {
    const {id,name,status} = editedData
    const response = await axiosInstance.put(`/category/${id}`,{name:name,status:status})
    console.log(response, "category updation response")
    return response
}

const categoryService = {categoryCreate, categoryListDetails, categoryDataDetails, updateCategory}

export default categoryService;
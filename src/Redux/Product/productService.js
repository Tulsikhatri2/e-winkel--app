import axios from "axios";
import axiosInstance from "../axiosInterceptors";

export const productsList = async() => {
    const response = await axiosInstance.get("/product?pageNumber=1&pageSize=10")
    return response.data.data
}

export const getProductDetails = async(id) => {
    const response = await axiosInstance.get(`/product/${id}`)
    return response.data.data
}

export const productDelete = async(id) => {
    const response = await axiosInstance.delete(`/product/${id}`)
    console.log(response,"product delete response")
}

export const addProduct = async(productData) => {
    const response = await axiosInstance.post(`/product`, productData)
    console.log(response,"product add response")
}
const productService = {productsList, getProductDetails, productDelete, addProduct}

export default productService
import axios from "axios";
import axiosInstance from "../axiosInterceptors";
import { productData } from "./productSlice";

 const productsList = async() => {
    const response = await axiosInstance.get("/product?pageNumber=1&pageSize=10")
    return response.data.data
}

 const getProductDetails = async(id) => {
    const response = await axiosInstance.get(`/product/${id}`)
    return response.data.data
}

 const productDelete = async(id) => {
    const response = await axiosInstance.delete(`/product/${id}`)
    console.log(response,"product delete response")
}

 const addProduct = async(productData) => {
    const response = await axiosInstance.post(`/product`, productData)
    console.log(response,"product add response")
}

 const productUpdate = async(productEditData) => {
    const {id,productData} = productEditData
    const response = await axiosInstance.post(`/product/${id}`,productData)
    console.log(response, "product edit response")
    return response.data.data
}
const productService = {productsList, getProductDetails, productDelete, addProduct, productUpdate}

export default productService
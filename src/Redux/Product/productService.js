import axiosInstance from "../axiosInterceptors";

export const productsDisplay = async() => {
    const response = await axiosInstance.get("/product?pageNumber=1&pageSize=10")
    console.log(response,"products data response from service")
    return response.data.data
}

const productService = {productsDisplay}

export default productService
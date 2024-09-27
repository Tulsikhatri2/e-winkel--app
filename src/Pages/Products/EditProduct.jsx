import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { productDataEdit } from "../../Redux/Product/productSlice";

const EditProduct = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {editProduct} = useSelector(state=>state.product)
    const {categoryList} = useSelector(state => state.category)
    const [name,setName] = useState("")
    const [description, setDescription] = useState("")
    const [categoryId, setCategoryId] = useState("")
    const [status, setStatus] = useState(false)
    const [file, setFile] = useState("")

    useEffect(()=>{
      setName(editProduct.productDetails.name)
      setDescription(editProduct.productDetails.description)
    },[editProduct?.isEdit])


    let productData = new FormData();
  productData.append("image", file)
  productData.append("name", name)
  productData.append("description",description)
  productData.append("categoryId", categoryId)
  productData.append("status",status)
  // productData.append("id",editProduct.productDetails.id)

  const handleEditProduct = () => {

    for (const [key, value] of productData.entries()) {
      console.log(key, value);
    }

    console.log(productData,"productData")
    const data = {
      id:editProduct.productDetails.id,
      productData: productData
    }
    dispatch(productDataEdit(data))
  }

    console.log(editProduct, "edit")
  return (
    <>
      <Box className="dashboard">
        <Box className="dashboardNav">
          <Box
            sx={{
              width: "85vw",
              height: "90vh",
            }}
          >
            <Box className="pageData">
              <Box className="dataBox" sx={{ justifyContent: "center" }}>
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    backgroundColor: "black",
                    marginRight: "70vw",
                    "&:hover": {
                      color: "black",
                      backgroundColor: "grey",
                    },
                  }}
                  onClick={() => {
                    navigate("/dashboard/products");
                  }}
                >
                  <IoMdArrowBack size={20} />
                </Button>
                <p
                  style={{
                    textDecoration: "underline",
                    color: "maroon",
                    fontSize: "3vh",
                    fontFamily: "Roboto Mono, monospace",
                  }}
                >
                  EDIT PRODUCTS
                </p>
                <form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    variant="standard"
                    label="Name"
                    InputLabelProps={{
                      style: {
                        fontFamily: "Roboto Mono, monospace",
                        fontWeight: "600",
                        fontSize: "2vh",
                        color: "black",
                      },
                    }}
                    InputProps={{
                      style: {
                        borderBottom: "1px solid maroon",
                      },
                    }}
                    sx={{ marginTop: "3vh" }}
                    color="black"
                    name="name"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    variant="standard"
                    label="Description"
                    InputLabelProps={{
                      style: {
                        fontFamily: "Roboto Mono, monospace",
                        fontWeight: "600",
                        fontSize: "2vh",
                        color: "black",
                      },
                    }}
                    InputProps={{
                      style: {
                        borderBottom: "1px solid maroon",
                      },
                    }}
                    sx={{ marginTop: "3vh" }}
                    color="black"
                    name="description"
                    value={description}
                    required
                    onChange={(e) => setDescription(e.target.value)}
                  />

                  <Box>
                  <select
                  required
                  name="categoryId"
                  onChange={(e)=>setCategoryId(e.target.value)}
                    className="countryOptions"
                    style={{ width: "16vw", marginTop: "3vh" }}
                  >
                    <option>Select Category*</option>
                    {categoryList.map((item) => {
                      return <option value={item._id}>{item.name}</option>;
                    })}
                  </select>

                  <select
                  required
                  name="status"
                  onChange={(e)=>setStatus(e.target.value)}
                    className="countryOptions"
                    style={{ width: "14vw", marginTop: "3vh", marginLeft:"2vw" }}
                  >
                    <option>Select Status*</option>
                    <option value={true}>Active</option>
                    <option value={false}>Inactive</option>
                  </select>
                  </Box>

                  <label
                  style={{marginTop:"5vh",
                    fontFamily: "Roboto Mono, monospace",
                    marginRight:"17vw",
                    fontSize:"2.1vh"
                  }}>Image*</label>
                  <Button
                   type="file"
                   variant="contained"
                   accept="image/*"
                    sx={{
                      fontFamily: "Roboto Mono, monospace",
                      color: "white",
                      backgroundColor: "gray",
                      marginTop:"0",
                      fontWeight:"500",
                      "&:hover": {
                        backgroundColor: "black",
                      },
                    }}
                    startIcon={<CloudUploadIcon 
                      type="file"
                      accept="image/*"
                      onChange={(e) => setFile(e.target.files[0])}
                      />}>
                    <input
                    required
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files[0])}/>
                  </Button>

                  <Button
                    variant="contained"
                    sx={{
                      fontFamily: "Roboto Mono, monospace",
                      color: "white",
                      backgroundColor: "maroon",
                      marginTop:"5vh",
                      fontWeight:"500",
                      "&:hover": {
                        backgroundColor: "black",
                      },
                    }}
                    onClick={handleEditProduct}
                  >
                    Update Product
                  </Button>
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default EditProduct;

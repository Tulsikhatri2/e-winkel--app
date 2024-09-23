import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import { FileUploader } from "react-drag-drop-files";
import { useDispatch, useSelector } from "react-redux";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { addProductData } from "../../Redux/Product/productSlice";

const fileTypes = ["JPG", "PNG", "GIF"];

const CreateProducts = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("")
  const { categoryList } = useSelector((state) => state.category);
  const [status, setStatus] = useState("")
  const navigate = useNavigate();
  const [file, setFile] = useState("");

  // console.log(status,"status")

  let productData = new FormData();
  productData.append("image", file)
  productData.append("name", name)
  productData.append("description",description)
  productData.append("categoryId", category)
  productData.append("status",status)

  const handleAddProduct = () => {
    for (const [key, value] of productData.entries()) {
      console.log(key, value);
    }

    dispatch(addProductData(productData))
  }
  


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
                    marginRight:"70vw",
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
                  ADD PRODUCTS
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
                    label="Name*"
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
                  ></TextField>
                  <TextField
                    variant="standard"
                    label="Description*"
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
                  ></TextField>

                  <Box>
                  <select
                  required
                  name="category"
                  onChange={(e)=>setCategory(e.target.value)}
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
                  }}>Image:</label>
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
                    onClick={handleAddProduct}
                  >
                    Add Product
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

export default CreateProducts;

import { Box, Button, Card, CardContent } from "@mui/material";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/PageLoading/Loding";
import { productDeleteID, productDetails, productDetailsDelete } from "../../Redux/Product/productSlice";
import DeleteProduct from "../../Components/DeleteData/DeleteProduct";

const ProductList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false)

  const { isLoadingProduct, productList } = useSelector(
    (state) => state.product
  );

  const handleProductDetails = (id) => {
    dispatch(productDetails(id))
    navigate("/dashboard/products/product-details")
  }

  const handleDeleteProduct = (id) => {
    dispatch(productDetailsDelete(id))
  }

  const handleClickOpen = (id) => {
    setOpen(true);
    dispatch(productDeleteID(id))
  };
  const handleClose = () => {
    setOpen(false);
  };

  // console.log(productList, "product list");

  return (
    <>
      {isLoadingProduct ? (
        <div style={{ marginLeft: "-30vw", marginTop: "50vh" }}>
          <Loading />
        </div>
      ) : (
        <Box className="dashboard">
          <Box className="dashboardNav">
            <Box className="productsBox">
              <Box className="pageData" sx={{ height: "90vh" }}>
                <Box className="dataBox">
                  <p className="productHeader">
                    <span style={{ width: "70vw", textAlign: "center", fontFamily: "Roboto Mono, monospace", }}>
                      PRODUCTS
                    </span>

                    <span style={{ width: "10vw" }}>
                      <Button
                        variant="contained"
                        className="loginButton"
                        sx={{
                          fontFamily: "Roboto Mono, monospace",
                          width: "3vw",
                          height: "6vh",
                          fontSize: "3vh",
                          marginTop: "-2vh",
                          fontWeight: "bold",
                        }}
                        color="warning"
                        onClick={() => {
                          navigate("/dashboard/products/create-product");
                        }}
                      >
                        +
                      </Button>
                    </span>
                  </p>
                  <Box className="productsCardBox">
                    {productList.map((item) => {
                      return (
                        <Box
                          sx={{
                            width: "23%",
                            height:"25%",
                          }}
                        >
                          <Card
                            variant="outlined"
                            sx={{
                              width: "100%",
                              height: "100%",
                              "&:hover": 
                              { boxShadow: "0px 0px 1vh gray" },
                            }}
                          >
                            <CardContent
                              sx={{
                                display: "flex",
                                // flexDirection: "row",
                                // alignItems: "center",
                                justifyContent: "space-between",
                                height: "100%",
                                width: "100%",
                                fontSize: "1.8vh",
                                fontWeight: "700",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                  justifyContent:"space-between",
                                  height: "85%",
                                  width: "50%",
                                }}
                              >
                                <p
                                  style={{
                                    fontFamily: "Roboto Mono, monospace",
                                    width: "80%",
                                    height: "20%",
                                    marginTop: "-1.8vh",
                                  }}
                                >
                                  {item.name}
                                </p>
                                <Box sx={{display:"flex",
                                alignItems:"center",
                                  marginRight:"1vw",
                                  width:"100%"
                                }}>

                                
                                <Button
                                variant="contained"
                                sx={{
                                  fontFamily: "Roboto Mono, monospace",
                                  fontSize:"1.5vh",
                                  marginBottom:"1.5vh",
                                  width: "60%",
                                  marginTop:"3vh",
                                }}
                                onClick={()=>handleProductDetails(item._id)}>
                                  Details
                                </Button>
                                <p 
                                className="deleteButton"
                                color="error"
                                onClick={()=>handleClickOpen(item._id)}>
                                  <RiDeleteBin2Line />
                                </p>
                                <DeleteProduct handleClose={handleClose} open={open} handleDeleteProduct={handleDeleteProduct}/>
                               
                                </Box>
                              </Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  height: "100%",
                                  width: "45%",
                                 
                                }}
                              >
                                <img
                                  style={{
                                    width: "90%",
                                    height: "80%",
                                    marginTop: "-1vh",
                                    marginLeft: "-1vw",
                                    fontSize: "1.5vh",
                                    border: "1px solid black",
                                    borderRadius:"1vh"
                                  }}
                                  src={`https://node-js-wse4.onrender.com/uploads/${item.fileName}`}
                                  alt={item.name}
                                />
                              </Box>
                            </CardContent>
                          </Card>
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default ProductList;

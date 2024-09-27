import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Components/PageLoading/Loding";
import { MdEdit } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { updateProduct } from "../../Redux/Product/productSlice";

const ProductDetails = () => {
  const offers = ["Bank Offers", "Client Offer", "Bank Offers"];
  const { productDetails, isLoadingProduct } = useSelector(
    (state) => state.product
  );
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleProductUpdate = () => {
    dispatch(updateProduct(productDetails))
    navigate("/dashboard/products/product-details/edit-product")
  }
  return (
    <>
      <Box className="dashboard">
        <Box className="dashboardNav">
          <Box className="productsBox">
            <Box className="pageData" sx={{ height: "90vh" }}>
              <Box className="dataBox" sx={{ justifyContent: "center" }}>
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    backgroundColor: "black",
                    marginRight:"35vw",
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
                <Box className="productDetailsBox">
                  {isLoadingProduct ? (
                    <Loading />
                  ) : (
                    <>
                      <Box className="details">
                        <Box className="imageBox">
                          <img
                            src={`https://node-js-wse4.onrender.com/uploads/${productDetails.fileName}`}
                            className="productImage"
                          />
                        </Box>

                        <Box className="productData">
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <p
                              style={{
                                fontFamily: "Roboto Mono, monospace",
                                fontWeight: "bold",
                                color: "blue",
                                fontSize: "1.8vh",
                                marginTop: "0.7vh",
                                marginLeft: "1vw",
                              }}
                            >
                              Category : {productDetails.category.name}
                            </p>
                            <Button
                              sx={{
                                marginTop: "1vh",
                              }}
                              onClick={handleProductUpdate}
                            >
                              <MdEdit size={25} color="maroon" />
                            </Button>
                          </Box>
                          <p
                            style={{
                              fontFamily: "Roboto Mono, monospace",
                              fontWeight: "bold",
                              marginLeft: "1vw",
                              fontSize: "3vh",
                              marginTop: "2vh",
                            }}
                          >
                            {productDetails.name}
                          </p>
                          <p
                            style={{
                              fontFamily: "Roboto Mono, monospace",
                              marginLeft: "1vw",
                              fontSize: "2.4vh",
                              marginTop: "-2vh",
                            }}
                          >
                            {productDetails.description}
                          </p>
                          <p
                            style={{
                              fontFamily: "Roboto Mono, monospace",
                              marginLeft: "1vw",
                              fontSize: "2.4vh",
                              fontWeight: "bold",
                              color: "maroon",
                            }}
                          >
                            Price: $20
                          </p>
                        </Box>
                      </Box>
                      <Box
                        className="details"
                        sx={{
                          display: "felx",
                          flexDirection: "column",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "Roboto Mono, monospace",
                            marginLeft: "1vw",
                            fontSize: "2vh",
                            fontWeight: "bold",
                            color: "blue",
                          }}
                        >
                          Offers:
                        </p>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "90%",
                            height: "80%",
                            marginLeft: "2vw",
                          }}
                        >
                          {offers.map(() => {
                            return (
                              <>
                                <Box
                                  sx={{
                                    width: "28%",
                                    height: "80%",
                                    border: "1px solid gray",
                                    borderRadius: "1vh",
                                    boxShadow: "0px 0px 1vh blue",
                                    textAlign: "center",
                                  }}
                                >
                                  <p
                                    style={{
                                      fontSize: "2vh",
                                      fontWeight: "bold",
                                      marginTop: "1vh",
                                      fontFamily: "Roboto Mono, monospace",
                                    }}
                                  >
                                    Bank Offer
                                  </p>

                                  <p
                                    style={{
                                      fontSize: "1.9vh",
                                      fontFamily: "Roboto Mono, monospace",
                                    }}
                                  >
                                    Upto 10% discount on use of credit card
                                  </p>
                                </Box>
                              </>
                            );
                          })}
                        </Box>
                      </Box>
                    </>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductDetails;

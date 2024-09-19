import { Box, Button, Card, CardContent } from "@mui/material";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/PageLoading/Loding";

const ProductList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoadingProduct, productList } = useSelector(
    (state) => state.product
  );

  console.log(productList, "product list");

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
                    <span style={{ width: "70vw", textAlign: "center" }}>
                      ALL PRODUCTS
                    </span>

                    <span style={{ width: "10vw" }}>
                      <Button
                        variant="contained"
                        className="loginButton"
                        sx={{
                          fontFamily: "Laila, serif",
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
                            height:"30%",
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
                                    width: "80%",
                                    height: "20%",
                                    marginTop: "-1.8vh",
                                  }}
                                >
                                  {item.name}
                                </p>
                                <Button
                                variant="contained"
                                sx={{
                                  fontFamily: "Laila, serif",
                                  fontSize:"1.4vh",
                                  marginTop: "-4vh",
                                  width: "80%",
                                }}>
                                  View Details
                                </Button>
                                {/* <p
                                  style={{
                                    width: "90%",
                                    height: "50%",
                                    fontSize: "1.4vh",
                                    marginTop:"-0.2vh",
                                    backgroundColor:"pink"
                                  }}
                                >
                                  {item.description}
                                </p> */}
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
                                    height: "90%",
                                    marginTop: "-1.5vh",
                                    marginLeft: "-1vw",
                                    fontSize: "1.5vh",
                                    border: "1px solid black",
                                  }}
                                  src={item.fileName}
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
          </Box>
        </Box>
      )}
    </>
  );
};

export default ProductList;

import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
  } from "@mui/material";
  import React from "react";
  import { CiEdit } from "react-icons/ci";
  import { useDispatch, useSelector } from "react-redux";
  import { CgPlayListAdd } from "react-icons/cg";
  import { useNavigate } from "react-router-dom";
  import { editCategory, singleCategoryDetails } from "../Redux/Category/categorySlice";
import { addCategory, addingProduct, categoryDataDetails, editingCategory } from "../Redux/Authentication/authSlice";

  
  const CategoryData = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {allCategoryData} = useSelector(state=>state.category)
    return (
      <div>
        <Box className="userData" sx={{ height: "90vh" }}>
          <Box className="dataBox">
            <p
              style={{
                textDecoration: "underline",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "7vh",
              }}
            >
              <span style={{ width: "70vw", textAlign: "center" }}>
                ALL CATEGORIES
              </span>
              <span style={{ width: "10vw" }}>
                <Button
                  variant="contained"
                  className="loginButton"
                  sx={{
                    fontFamily: "Laila, serif",
                    width: "3vw",
                    height: "6vh",
                    fontSize: "2.7vh",
                    marginTop: "-2vh",
                  }}
                  color="warning"
                  onClick={()=>{
                    dispatch(addCategory(true))
                    // navigate("/category/createCategory")
                  }}
                >
                  <CgPlayListAdd size={30} />
                </Button>
              </span>
            </p>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        fontFamily: "Laila, serif",
                        fontWeight: "700",
                        fontSize: "2.5vh",
                        color: "#2586B6",
                        textAlign: "center",
                      }}
                    >
                      ID
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Laila, serif",
                        fontWeight: "700",
                        fontSize: "2.5vh",
                        color: "#2586B6",
                        textAlign: "center",
                      }}
                    >
                      NAME
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Laila, serif",
                        fontWeight: "700",
                        fontSize: "2.5vh",
                        color: "#2586B6",
                        textAlign: "center",
                      }}
                    >
                      UPDATE
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Laila, serif",
                        fontWeight: "700",
                        fontSize: "2.5vh",
                        color: "#2586B6",
                        textAlign: "center",
                      }}
                    >
                      ADD PRODUCTS
                    </TableCell>
                    <TableCell
                      sx={{
                        fontFamily: "Laila, serif",
                        fontWeight: "700",
                        fontSize: "2.5vh",
                        color: "#2586B6",
                        textAlign: "center",
                      }}
                    >
                      DETAILS
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allCategoryData.map((item, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell
                          sx={{
                            fontFamily: "Laila, serif",
                            fontWeight: "600",
                            fontSize: "2vh",
                            textAlign: "center",
                          }}
                        >
                          {item._id}
                        </TableCell>
                        <TableCell
                          sx={{
                            fontFamily: "Laila, serif",
                            fontWeight: "600",
                            fontSize: "2vh",
                            textAlign: "center",
                          }}
                        >
                          {item.name}
                        </TableCell>
                        <TableCell
                          sx={{
                            fontFamily: "Laila, serif",
                            fontWeight: "200",
                            fontSize: "2vh",
                            textAlign: "center",
                          }}
                        >
                          <Button
                            variant="contained"
                            className="loginButton"
                            sx={{
                              fontFamily: "Laila, serif",
                              height: "4vh",
                              fontSize: "2.7vh",
                            }}
                            color="warning"
                            onClick={()=>{
                              dispatch(editCategory(item))
                              dispatch(editingCategory())
                            }}
                          >
                            <CiEdit />
                          </Button>
                        </TableCell>
                        <TableCell
                          sx={{
                            fontFamily: "Laila, serif",
                            fontWeight: "200",
                            fontSize: "2vh",
                            textAlign: "center",
                          }}
                        >
                          <Button
                            variant="contained"
                            className="loginButton"
                            sx={{
                              fontFamily: "Laila, serif",
                              height: "4vh",
                              fontSize: "1.7vh",
                            }}
                            color="success"
                            onClick={()=>{
                              // navigate(`/category/createProduct/${item._id}`)
                              dispatch(addingProduct(true))
                            }}
                          >
                            ADD PRODUCTS
                          </Button>
                        </TableCell>
                        <TableCell
                          sx={{
                            fontFamily: "Laila, serif",
                            fontWeight: "200",
                            fontSize: "2vh",
                            textAlign: "center",
                          }}
                        >
                          <Button
                            variant="contained"
                            className="loginButton"
                            sx={{
                              fontFamily: "Laila, serif",
                              height: "4vh",
                              fontSize: "1.7vh",
                            }}
                            color="info"
                            onClick={()=>{
                              dispatch(singleCategoryDetails(item._id))
                              dispatch(categoryDataDetails(true))
                              // navigate("/categoryDetails")
                            }}
                          >
                            DETAILS
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </div>
    );
  };
  
  export default CategoryData;
  
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
  import React, { useEffect } from "react";
  import { CiEdit } from "react-icons/ci";
  import { useDispatch, useSelector } from "react-redux";
  import { CgPlayListAdd } from "react-icons/cg";
  import { useNavigate } from "react-router-dom";
  import { categoryListData, editCategory, categoryData } from "../../Redux/Category/categorySlice";
import Header from "../../Components/Dashboard/Header";
import SideNavbar from "../../Components/Dashboard/SideNavbar";
import Loading from "../../Components/PageLoading/Loding";

  
  const CategoryList = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {categoryList,isLoadingData} = useSelector(state=>state.category)

    useEffect(()=>{
      dispatch(categoryListData());
    },[dispatch])

    return (
      <>
      {isLoadingData?(
        <div style={{marginLeft:"-30vw",marginTop:"50vh"}}>
        <Loading/>
        </div>
      ):
      <Box className="dashboard">
        <Box className="dashboardNav">  

        <Box className="categoryListBox">
        <Box className="pageData" sx={{ height: "90vh" }}>
          <Box className="dataBox">
            <p className="categoryHeading">
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
                    navigate("/dashboard/category/create-category")
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
                    <TableCell className="tableCell"
                    sx={{fontFamily: "Laila, serif", fontWeight:"700"}}>
                      ID
                    </TableCell>
                    <TableCell className="tableCell"
                    sx={{fontFamily: "Laila, serif", fontWeight:"700"}}>
                      NAME
                    </TableCell>
                    <TableCell className="tableCell"
                    sx={{fontFamily: "Laila, serif", fontWeight:"700"}}>
                      UPDATE
                    </TableCell>
                    <TableCell className="tableCell"
                    sx={{fontFamily: "Laila, serif", fontWeight:"700"}}>
                      DETAILS
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {categoryList.map((item, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell className="tableContentCell"
                        sx={{fontFamily: "Laila, serif", fontWeight:"600"}}>
                          {item._id}
                        </TableCell>
                        <TableCell
                          className="tableContentCell"
                          sx={{fontFamily: "Laila, serif", fontWeight:"600"}}>
                          {item.name}
                        </TableCell>
                        <TableCell className="tableContentCell"
                        sx={{fontFamily: "Laila, serif", fontWeight:"600"}}>
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
                              navigate("/dashboard/category/edit-category")
                            }}
                          >
                            <CiEdit />
                          </Button>
                        </TableCell>
                        <TableCell className="tableContentCell"
                        sx={{fontFamily: "Laila, serif", fontWeight:"600"}}>
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
                              dispatch(categoryData(item._id))
                              navigate("/dashboard/category/category-details")
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
        </Box>
        </Box>
     </Box>
    }
    </>

    );
  };
  
  export default CategoryList;
  
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
import Loading from "../../Components/PageLoading/Loding";
import { buttonActiveStyle } from "../../Redux/Authentication/authSlice";

  
  const CategoryList = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {categoryList,isLoadingData} = useSelector(state=>state.category)

    const handleCategoryEdit = (item) => {
      dispatch(editCategory(item))
      navigate("/dashboard/category/edit-category")
    }

    const handleCategoryDetails = (id) => {
      dispatch(categoryData(id))
      navigate("/dashboard/category/category-details")
    }

    useEffect(()=>{
      dispatch(categoryListData());
      dispatch(buttonActiveStyle("Categories"))

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
              <span style={{ width: "70vw", textAlign: "center", fontFamily: "Roboto Mono, monospace", }}>
                CATEGORIES
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
                    fontWeight:"bold"
                  }}
                  color="warning"
                  onClick={()=>{
                    navigate("/dashboard/category/create-category")
                  }}
                >
                  +
                </Button>

              </span>
            </p>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                  <TableCell className="tableCell"
                    sx={{fontFamily: "Roboto Mono, monospace", fontWeight:"700", textAlign:"center"}}>
                      S.No.
                    </TableCell>
                    <TableCell className="tableCell"
                    sx={{fontFamily: "Roboto Mono, monospace", fontWeight:"700", textAlign:"center"}}>
                      ID
                    </TableCell>
                    <TableCell className="tableCell"
                    sx={{fontFamily: "Roboto Mono, monospace", fontWeight:"700", textAlign:"center"}}>
                      NAME
                    </TableCell>
                    <TableCell className="tableCell"
                    sx={{fontFamily: "Roboto Mono, monospace", fontWeight:"700", textAlign:"center"}}>
                      UPDATE
                    </TableCell>
                    <TableCell className="tableCell"
                    sx={{fontFamily: "Roboto Mono, monospace", fontWeight:"700", textAlign:"center"}}>
                      DETAILS
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {categoryList.map((item, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell className="tableContentCell"
                        sx={{fontFamily: "Roboto Mono, monospace", fontWeight:"600", textAlign:"center"}}>
                          {index+1}
                        </TableCell>
                        <TableCell className="tableContentCell"
                        sx={{fontFamily: "Roboto Mono, monospace", fontWeight:"600", textAlign:"center"}}>
                          {item._id}
                        </TableCell>
                        <TableCell
                          className="tableContentCell"
                          sx={{fontFamily: "Roboto Mono, monospace", fontWeight:"600", textAlign:"center"}}>
                          {item.name}
                        </TableCell>
                        <TableCell className="tableContentCell"
                        sx={{fontFamily: "Roboto Mono, monospace", fontWeight:"600", textAlign:"center"}}>
                          <Button
                            variant="contained"
                            className="loginButton"
                            sx={{
                              fontFamily: "Roboto Mono, monospace",
                              height: "4vh",
                              fontSize: "2.7vh",
                            }}
                            color="warning"
                            onClick={()=>{handleCategoryEdit(item)}}
                          >
                            <CiEdit />
                          </Button>
                        </TableCell>
                        <TableCell className="tableContentCell"
                        sx={{fontFamily: "Roboto Mono, monospace", fontWeight:"600", textAlign:"center"}}>
                          <Button
                            variant="contained"
                            className="loginButton"
                            sx={{
                              fontFamily: "Roboto Mono, monospace",
                              height: "4vh",
                              fontSize: "1.7vh",
                            }}
                            color="info"
                            onClick={()=>{handleCategoryDetails(item._id)}}
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
  
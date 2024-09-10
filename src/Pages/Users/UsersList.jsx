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
  import { useDispatch, useSelector } from "react-redux";
  import { CiEdit } from "react-icons/ci";
  import { RiDeleteBin2Line } from "react-icons/ri";
  import { useNavigate } from "react-router-dom";
  import { deletingUser, editUserData, userData, userListData } from "../../Redux/Authentication/authSlice";
import Loading from "../../Components/PageLoading/Loding";

  
  const UsersList = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {usersList, isLoading} = useSelector(state=>state.auth)

    useEffect(()=>{
      dispatch(userListData());
    },[dispatch])

    return (
      <>
      {isLoading?(
        <div style={{marginLeft:"-30vw",marginTop:"50vh"}}>
        <Loading/>
        </div>
      ):
      <Box className="dashboard">
      <Box className="dashboardNav">
        <Box
            sx={{
              width: "75vw",
              height:"90vh",
            }}>
            
      <Box className="pageData">
        <Box className="dataBox">
          <p style={{textAlign:"center", textDecoration:"underline", fontWeight:"bold"}}>ALL USERS</p>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    className="tableCell"
                    sx={{fontFamily: "Laila, serif", fontWeight:"700"}}
                  >
                    ID
                  </TableCell>
                  <TableCell
                    className="tableCell"
                    sx={{fontFamily: "Laila, serif", fontWeight:"700"}}
                  >
                    NAME
                  </TableCell>
                  <TableCell
                    className="tableCell"
                    sx={{fontFamily: "Laila, serif", fontWeight:"700"}}
                  >
                    EMAIL
                  </TableCell>
                  <TableCell
                    className="tableCell"
                    sx={{fontFamily: "Laila, serif", fontWeight:"700"}}
                  >
                    UPDATE
                  </TableCell>
                  <TableCell
                    className="tableCell"
                    sx={{fontFamily: "Laila, serif", fontWeight:"700"}}
                  >
                    DELETE
                  </TableCell>
                  <TableCell
                    className="tableCell"
                    sx={{fontFamily: "Laila, serif", fontWeight:"700"}}
                  >
                    DETAILS
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {usersList.map((item, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell
                        className="tableContentCell"
                        sx={{fontFamily: "Laila, serif", fontWeight:"600"}}
                      >
                        {item.id}
                      </TableCell>
                      <TableCell
                        className="tableContentCell"
                        sx={{fontFamily: "Laila, serif", fontWeight:"600"}}
                      >
                        {item.name}
                      </TableCell>
                      <TableCell
                       className="tableContentCell"
                       sx={{fontFamily: "Laila, serif", fontWeight:"600"}}
                      >
                        {item.email}
                      </TableCell>
                      <TableCell
                        className="tableContentCell"
                        sx={{fontFamily: "Laila, serif", fontWeight:"600"}}
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
                            navigate("/dashboard/users/edit-user")
                            dispatch(editUserData(item))
                          }}
                        >
                          <CiEdit />
                        </Button>
                      </TableCell>
  
                      <TableCell
                        className="tableContentCell"
                        sx={{fontFamily: "Laila, serif", fontWeight:"600"}}
                      >
                        <Button
                          variant="contained"
                          className="loginButton"
                          sx={{
                            fontFamily: "Laila, serif",
                            height: "4vh",
                            fontSize: "2.7vh",
                          }}
                          color="error"
                          onClick={() => {
                              dispatch(deletingUser(item.id));
                            }}
                        >
                          <RiDeleteBin2Line />
                        </Button>
                      </TableCell>
                      <TableCell
                          className="tableContentCell"
                          sx={{fontFamily: "Laila, serif", fontWeight:"600"}}
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
                              dispatch(userData(item.id))
                              navigate("/dashboard/users/user-details")
                            }}
                          >
                            Details
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
  
  export default UsersList;
  
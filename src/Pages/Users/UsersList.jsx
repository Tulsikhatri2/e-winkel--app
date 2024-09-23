import {
  Box,
  Button,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import {
  buttonActiveStyle,
  deleteUserData,
  deleteUserId,
  deletingUser,
  editUserData,
  userData,
  userListData,
} from "../../Redux/Authentication/authSlice";
import Loading from "../../Components/PageLoading/Loding";
import DeleteUser from "../../Components/DeleteData/DeleteUser";

const UsersList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { usersList, isLoading } = useSelector((state) => state.auth);
  const [pageNumber, setPageNumber] = useState(1);
  const [rows, setRows] = useState("10");
  const [open, setOpen] = useState(false)

  const userListPagination = {
    pageNumber: pageNumber,
    rows: rows,
  };
  useEffect(() => {
    dispatch(userListData());
    dispatch(buttonActiveStyle("Users"));
  }, [dispatch]);

  const handleUserEdit = (item) => {
    navigate("/dashboard/users/edit-user");
    dispatch(editUserData(item));
  };

  const handleUserDelete = (id) => {
    dispatch(deletingUser(id));
    dispatch(deleteUserData(id));
  };

  const handleUserDetails = (id) => {
    dispatch(userData(id));
    navigate("/dashboard/users/user-details");
  };

  const handleClickOpen = (id) => {
    setOpen(true);
    console.log(id,"from userlist")
    dispatch(deleteUserId(id))
  };

  const handleClose = () => {
    setOpen(false);
  };


  // console.log(userListPagination, "pagination");
  // console.log(pageNumber, "pageNumber");

  return (
    <>
      {isLoading ? (
        <div style={{ marginLeft: "-30vw", marginTop: "50vh" }}>
          <Loading />
        </div>
      ) : (
        <>
        <Box className="dashboard">
          <Box className="dashboardNav">
            <Box
              sx={{
                width: "75vw",
                height: "90vh",
              }}
            >
              <Box className="pageData">
                <Box className="dataBox">
                  <p
                    style={{
                      textAlign: "center",
                      textDecoration: "underline",
                      fontWeight: "bold",
                      fontFamily: "Roboto Mono, monospace",
                      height:"35vh"
                    }}
                  >
                  USERS
                  </p>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell
                            className="tableCell"
                            sx={{
                              fontFamily: "Roboto Mono, monospace",
                              fontWeight: "700",
                              textAlign: "center",
                            }}
                          >
                            S.No.
                          </TableCell>
                          <TableCell
                            className="tableCell"
                            sx={{
                              fontFamily: "Roboto Mono, monospace",
                              fontWeight: "700",
                              textAlign: "center",
                            }}
                          >
                            NAME
                          </TableCell>
                          <TableCell
                            className="tableCell"
                            sx={{
                              fontFamily: "Roboto Mono, monospace",
                              fontWeight: "700",
                              textAlign: "center",
                            }}
                          >
                            EMAIL
                          </TableCell>
                          <TableCell
                            className="tableCell"
                            sx={{
                              fontFamily: "Roboto Mono, monospace",
                              fontWeight: "700",
                              textAlign: "center",
                            }}
                          >
                            UPDATE
                          </TableCell>
                          <TableCell
                            className="tableCell"
                            sx={{
                              fontFamily: "Roboto Mono, monospace",
                              fontWeight: "700",
                              textAlign: "center",
                            }}
                          >
                            DETAILS
                          </TableCell>
                          <TableCell
                            className="tableCell"
                            sx={{
                              fontFamily: "Roboto Mono, monospace",
                              fontWeight: "700",
                              textAlign: "center",
                            }}
                          >
                            DELETE
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {usersList.map((item, index) => {
                          return (
                            <TableRow key={index}>
                              <TableCell
                                className="tableContentCell"
                                sx={{
                                  fontFamily: "Roboto Mono, monospace",
                                  fontWeight: "600",
                                  textAlign: "center",
                                }}
                              >
                                {index + 1}
                              </TableCell>
                              <TableCell
                                className="tableContentCell"
                                sx={{
                                  fontFamily: "Roboto Mono, monospace",
                                  fontWeight: "600",
                                  textAlign: "center",
                                }}
                              >
                                {item.name}
                              </TableCell>
                              <TableCell
                                className="tableContentCell"
                                sx={{
                                  fontFamily: "Roboto Mono, monospace",
                                  fontWeight: "600",
                                  textAlign: "center",
                                }}
                              >
                                {item.email}
                              </TableCell>
                              <TableCell
                                className="tableContentCell"
                                sx={{
                                  fontFamily: "Roboto Mono, monospace",
                                  fontWeight: "600",
                                  textAlign: "center",
                                }}
                              >
                                <Button
                                  variant="contained"
                                  className="loginButton"
                                  sx={{
                                    fontFamily: "Roboto Mono, monospace",
                                    height: "4vh",
                                    fontSize: "2.7vh",
                                  }}
                                  color="warning"
                                  onClick={() => {
                                    handleUserEdit(item);
                                  }}
                                >
                                  <CiEdit />
                                </Button>
                              </TableCell>
                              <TableCell
                                className="tableContentCell"
                                sx={{
                                  fontFamily: "Roboto Mono, monospace",
                                  fontWeight: "600",
                                  textAlign: "center",
                                }}
                              >
                                <Button
                                  variant="contained"
                                  className="loginButton"
                                  sx={{
                                    fontFamily: "Roboto Mono, monospace",
                                    height: "4vh",
                                    fontSize: "1.7vh",
                                  }}
                                  color="info"
                                  onClick={() => {
                                    handleUserDetails(item.id);
                                  }}
                                >
                                  Details
                                </Button>
                              </TableCell>
                              <TableCell
                                className="tableContentCell"
                                sx={{
                                  fontFamily: "Roboto Mono, monospace",
                                  fontWeight: "600",
                                  textAlign: "center",
                                }}
                              >
                                <p
                                  className="deleteCell"
                                  onClick={()=>handleClickOpen(item.id)}
                                >
                                  <RiDeleteBin2Line />
                                </p>
                                <DeleteUser handleClose={handleClose} open={open} handleUserDelete={handleUserDelete} id={item.id}/>
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
        </>
      )}
    </>
  );
};

export default UsersList;

import { Box, Button } from "@mui/material";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { categoryInfo } from "../../Redux/Authentication/authSlice";
import Loading from "../../Components/Loding";

const CategoryDetails = () => {
  const navigate = useNavigate()
  const { singleCategory, isLoadingData } = useSelector(
    (state) => state.category
  );
  console.log(singleCategory, "single category");
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
            <Box className="userData">
              <Box className="dataBox" sx={{ justifyContent: "center" }}>
                <Box className="detailsCard">
                  <Box className="categoryCreateButton" sx={{ height: "20%" }}>
                    <Button
                      variant="contained"
                      sx={{
                        color: "#0a3149",
                        backgroundColor: "white",
                        "&:hover": {
                          color: "white",
                          backgroundColor: "#55a3d4",
                        },
                      }}
                      onClick={() => {
                        navigate("/dashboard/category")
                      }}
                    >
                      <IoMdArrowBack size={20} />
                    </Button>
                  </Box>
                  {isLoadingData ? (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Loading />
                    </Box>
                  ) : (
                    <Box
                      sx={{
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        height: "70%",
                        color: "black",
                        fontSize: "2vh",
                        fontWeight: "500",
                        marginTop: "5vh",
                      }}
                    >
                      <p style={{ lineHeight: "1.7" }}>
                        ID: {singleCategory._id}
                        <br />
                        <br />
                        Name: {singleCategory.name}
                        <br />
                        <br />
                        Created At: {singleCategory.createAt}
                      </p>
                    </Box>
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

export default CategoryDetails;

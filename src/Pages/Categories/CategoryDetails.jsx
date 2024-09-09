import { Box, Button } from "@mui/material";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/PageLoading/Loding";

const CategoryDetails = () => {
  const navigate = useNavigate()
  const { singleCategory, isLoadingData } = useSelector(
    (state) => state.category
  );
 
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
                  <Box className="createButton" sx={{ height: "20%" }}>
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
                    <Box className="categoryDetailsLoading">
                      <Loading />
                    </Box>
                  ) : (
                    <Box className="categoryDetailsCard">
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

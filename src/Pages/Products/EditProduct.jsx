import { Box, Button } from "@mui/material";
import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const EditProduct = () => {
    const navigate = useNavigate()
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
            <Box className="pageData">
              <Box className="dataBox" sx={{ justifyContent: "center" }}>
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    backgroundColor: "black",
                    marginRight: "70vw",
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
                <p
                  style={{
                    textDecoration: "underline",
                    color: "maroon",
                    fontSize: "3vh",
                    fontFamily: "Roboto Mono, monospace",
                  }}
                >
                  EDIT PRODUCTS
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default EditProduct;

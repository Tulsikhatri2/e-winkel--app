import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, TextField } from "@mui/material";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { creatingCategory } from "../../Redux/Category/categorySlice";

const CreateCategory = () => {
  const [name, setName] = useState("");
  const [categoryStatus, setCategoryStatus] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCreateCategory = () => {
    const categoryData = {
      name: name,
      status: categoryStatus,
    };
    dispatch(creatingCategory(categoryData));
    navigate("/dashboard/category");
  };

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
              <Box className="dataBox">
                <p
                  style={{
                    marginTop: "10vh",
                    color: "maroon",
                    textDecoration: "underline",
                    fontSize: "3vh",
                    fontFamily: "Roboto Mono, monospace",
                  }}
                >
                  Add Category
                </p>
                <Box className="categoryInfo" sx={{ marginTop: "7vh" }}>
                  <Box className="createButton">
                    <Button
                      variant="contained"
                      sx={{
                        color: "white",
                        backgroundColor: "black",
                        "&:hover": {
                          color: "black",
                          backgroundColor: "grey",
                        },
                      }}
                      onClick={() => {
                        navigate("/dashboard/category");
                      }}
                    >
                      <IoMdArrowBack size={20} />
                    </Button>
                  </Box>
                  <Box className="createCategoryFields">
                    <TextField
                      variant="standard"
                      label="Name*"
                      InputLabelProps={{
                        style: {
                          fontFamily: "Roboto Mono, monospace",
                          fontWeight: "bold",
                          fontSize: "2vh",
                        },
                      }}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      sx={{ marginTop: "2vh" }}
                    ></TextField>

                    <select
                      className="countryOptions"
                      style={{
                        width: "60%",
                      }}
                      name="categoryStatus"
                      onChange={(e) => setCategoryStatus(e.target.value)}
                    >
                      <option>Select Category Status</option>
                      <option value={true}>Active</option>
                      <option value={false}>Inactive</option>
                    </select>
                    <Button
                      variant="contained"
                      sx={{
                        color: "white",
                        backgroundColor: "black",
                        fontFamily: "Roboto Mono, monospace",
                        marginTop: "4vh",
                        "&:hover": {
                          color: "black",
                          backgroundColor: "grey",
                        },
                      }}
                      onClick={() => {
                        handleCreateCategory();
                      }}
                    >
                      Create
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CreateCategory;

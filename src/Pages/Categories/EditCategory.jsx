import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryDataUpdate } from "../../Redux/Category/categorySlice";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const EditCategory = () => {
  const [editedName, setEditedName] = useState("");
  const [status, setStatus] = useState("");
  const { edit } = useSelector((state) => state.category);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setEditedName(edit.category.name);
  }, [edit]);

  const handleCtageoryEdit = () => {
    const editedData = {
      id: edit.category._id,
      name: editedName,
      status: status,
    };
    dispatch(categoryDataUpdate(editedData));
    navigate("/dashboard/category");
  };
  console.log({ editedName, status });

  return (
    <div>
      <Box className="pageData" sx={{ height: "90vh" }}>
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
            Update Category
          </p>
          <Box className="categoryInfo" sx={{ marginTop: "10vh" }}>
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
                sx={{ marginTop: "2vh" }}
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              ></TextField>

              <select
                className="countryOptions"
                style={{
                  width: "60%",
                }}
                name="status"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option>Select Category Status</option>
                <option value={true}>Active</option>
                <option value={false}>Inactive</option>
              </select>

              <Button
                variant="contained"
                color="warning"
                sx={{
                  fontFamily: "Roboto Mono, monospace",
                  width: "3vw",
                  height: "6vh",
                  fontSize: "1.8vh",
                  marginTop: "4vh",
                }}
                onClick={() => {
                  handleCtageoryEdit();
                }}
              >
                UPDATE
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default EditCategory;

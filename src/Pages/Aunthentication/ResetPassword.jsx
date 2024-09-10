import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { resetUserPassword } from "../../Redux/Authentication/authSlice";
import "./Authentication.style.css"

const ResetPassword = () => {
  const { token, id } = useParams();
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleResetPassword = () => {
    const data = {
      password: password,
      token: token,
      userId: id,
    };
    dispatch(resetUserPassword(data));
    navigate("/")
  }

  return (
    <Box className="resetPasswordBackground">
      <Box className="resetPasswordInnerBox">
        <Box className="resetPasswordDialogBox">
        <TextField
        InputLabelProps={{
            style: {
              fontFamily: "Laila, serif",
            },
          }}
          label="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          variant="filled"
        ></TextField>
        <Button
          variant="contained"
          sx={{
            fontFamily: "Laila, serif",
            marginTop: "4vh",
            width: "50%",
          }}
          onClick={handleResetPassword}
        >
          Reset Password
        </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ResetPassword;

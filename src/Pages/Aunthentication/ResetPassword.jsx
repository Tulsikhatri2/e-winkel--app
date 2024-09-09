import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { resetUserPassword } from "../../Redux/Authentication/authSlice";
import "./Authentication.style.css"

const ResetPassword = () => {
  const { token, id } = useParams();
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

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
          onClick={() => {
            const data = {
              password: password,
              token: token,
              userId: id,
            };
            console.log(password, "password");
            console.log(token, "token");
            console.log(id, "id");
            dispatch(resetUserPassword(data));
          }}
        >
          Reset Password
        </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ResetPassword;

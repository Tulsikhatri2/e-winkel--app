import { Button, Dialog, DialogActions, DialogContent, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { passwordForgot } from '../../Redux/Authentication/authSlice';
import "./ForgotPassword.style.css"

const ForgotPassword = ({handleClose, open}) => {
    const [email,setEmail] = useState("")
    const dispatch = useDispatch()
    
  return (
    <div>
        <Dialog
        open={open}
        onClose={handleClose}
        // className='dialogBox'
        sx={{opacity:"1"}}
        PaperProps={{
          onSubmit: (event) => {
            event.preventDefault();
            const data={
                email:email
            }
            dispatch(passwordForgot(data))
            handleClose()
          }
        }}
      >
        <p className='boxHeading'>Forgot Password!!</p>
        <form>
        <DialogContent>
          <p className='subHeading'>
            Please enter your email to get Reset Password link ...
          </p>
         
          <TextField
            autoFocus
            required
            margin="dense"
            name=""
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            InputLabelProps={{
                style: {
                  fontFamily: "Roboto Mono, monospace",
                },
              }}
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

        </DialogContent>

        <DialogActions>

        <Button 
          variant="contained"
          type="submit"
          className="loginButton"
          sx={{
            fontFamily: "Roboto Mono, monospace",
            marginTop: "4vh"
          }}>Get Link
          </Button>

          <Button 
          variant="contained"
          className="loginButton"
          sx={{
            fontFamily: "Roboto Mono, monospace",
            marginTop: "4vh"
          }}
           onClick={handleClose}>Cancel
           </Button>
         
        </DialogActions>
        </form>
      </Dialog>
    </div>
  )
}

export default ForgotPassword
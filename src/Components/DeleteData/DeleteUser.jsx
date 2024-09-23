import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import "./DeleteData.css"
import React from 'react'
import { useSelector } from 'react-redux';

const DeleteUser = ({ handleClose, open, handleUserDelete }) => {

    const {userID} = useSelector(state=>state.auth)
    
  return (
    <>
    <Dialog
        open={open}
        onClose={handleClose}
        className="dialogBox"
        PaperProps={{
          onSubmit: (event) => {
            event.preventDefault();
            handleUserDelete(userID);
            handleClose()
          },
        }}
      >
        <form>
          <DialogContent>
            <p className="subHeading">
              Are you sure you want to delete this user?
            </p>
          </DialogContent>

          <DialogActions>
            <Button
              variant="contained"
              type="submit"
              className="loginButton"
              color="error"
              sx={{
                fontFamily: "Roboto Mono, monospace",
              }}
            >
              Delete
            </Button>

            <Button
              variant="contained"
              className="loginButton"
              sx={{
                fontFamily: "Roboto Mono, monospace",
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  )
}

export default DeleteUser
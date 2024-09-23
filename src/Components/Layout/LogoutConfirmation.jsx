import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import React from 'react'

const LogoutConfirmation = ({handleClose, open, handleLogout}) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{opacity:"1"}}
        PaperProps={{
          onSubmit: (event) => {
            event.preventDefault();
            handleLogout()
            handleClose()
          }
        }}
      >
        <form>
        <DialogContent>
          <p className='subHeading'>
            Logout..??
          </p>
        </DialogContent>

        <DialogActions>
        <Button 
          variant="contained"
          type="submit"
          className="loginButton"
          sx={{
            fontFamily: "Roboto Mono, monospace",
            marginTop: "2vh"
          }}>Yes
          </Button>

          <Button 
          variant="contained"
          className="loginButton"
          sx={{
            fontFamily: "Roboto Mono, monospace",
            marginTop: "2vh"
          }}
           onClick={handleClose}>Cancel
           </Button>
         
        </DialogActions>
        </form>
      </Dialog>
    </div>
  )
}

export default LogoutConfirmation
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const DeleteProduct = ({ handleClose, open, handleDeleteProduct }) => {

  const {productID} = useSelector(state=>state.product)

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{opacity:"0.5"}}
        PaperProps={{
          onSubmit: (event) => {
            event.preventDefault();
            handleDeleteProduct(productID)
            handleClose()
          },
        }}
      >
        <form>
          <DialogContent>
            <p className="subHeading">
              Are you sure you want to delete this product?
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
    </div>
  );
};

export default DeleteProduct;

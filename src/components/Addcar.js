import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
//import Carlist from "./Carlist";

function Addcar(props) {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    color: "",
    fuel: "",
    year: "",
    price: "",
  });
  
  
  const handleInputChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const addCar = () => {
    props.saveCars(car);
    handleClose();
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        style={{ margin: 10 }}
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
      >
        Add Car
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Uusi auto</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="brand"
            value={car.brand}
            onChange={(e) => handleInputChange(e)}
            label="Brand"
            fullWidth
          />
          <TextField
            margin="dense"
            name="model"
            value={car.model}
            onChange={(e) => handleInputChange(e)}
            label="Model"
            fullWidth
          />
          <TextField
            margin="dense"
            name="color"
            value={car.color}
            onChange={(e) => handleInputChange(e)}
            label="Color"
            fullWidth
          />
          <TextField
            margin="dense"
            name="fuel"
            value={car.fuel}
            onChange={(e) => handleInputChange(e)}
            label="Fuel"
            fullWidth
          />
          <TextField
            margin="dense"
            name="year"
            value={car.year}
            onChange={(e) => handleInputChange(e)}
            label="Year"
            fullWidth
          />
          <TextField
            margin="dense"
            name="price"
            value={car.price}
            onChange={(e) => handleInputChange(e)}
            label="Price"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addCar} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default Addcar;

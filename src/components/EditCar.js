import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
//import Carlist from "./Carlist";

function EditCar(props) {
  const [open, setOpen] = useState(false);
  const [cars, setCars] = useState({
    brand: "",
    model: "",
    color: "",
    fuel: "",
    year: "",
    price: "",
  });

  const handleInputChange = (e) => {
    setCars({ ...cars, [e.target.name]: e.target.value });
  };


  const handleSave = () => {

    props.updateCar(props.params.value, cars); 
    handleClose();
  }
  const handleClickOpen = () => {
    setCars( {
        brand: props.params.data.brand,
        model: props.params.data.model,
        color: props.params.data.color,
        fuel: props.params.data.fuel,
        year: props.params.data.year,
        price: props.params.data.price
    })

    console.log(props.params)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  //Button menee piiloon jostain syystä???
  //jos ei laita 5* niin se on piilossa. Ennen Margin oli = 10. nyt vaihdoin sen "5*" että se näkyy

  return (
    <div>
      <Button
        size="small"
        color="primary"
        onClick={handleClickOpen}
      >
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Päivitä auto</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="brand"
            value={cars.brand}
            onChange={(e) => handleInputChange(e)}
            label="Brand"
            fullWidth
          />
          <TextField
            margin="dense"
            name="model"
            value={cars.model}
            onChange={(e) => handleInputChange(e)}
            label="Model"
            fullWidth
          />
          <TextField
            margin="dense"
            name="color"
            value={cars.color}
            onChange={(e) => handleInputChange(e)}
            label="Color"
            fullWidth
          />
          <TextField
            margin="dense"
            name="fuel"
            value={cars.fuel}
            onChange={(e) => handleInputChange(e)}
            label="Fuel"
            fullWidth
          />
          <TextField
            margin="dense"
            name="year"
            value={cars.year}
            onChange={(e) => handleInputChange(e)}
            label="Year"
            fullWidth
          />
          <TextField
            margin="dense"
            name="price"
            value={cars.price}
            onChange={(e) => handleInputChange(e)}
            label="Price"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default EditCar;

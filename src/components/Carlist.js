import React, { useState, useEffect } from "react";
import Addcar from "./Addcar";

//import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import Snackbar from "@material-ui/core/Snackbar";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
//ag-theme material on tärkeä, enemmän asetuksia

function Carlist() {
  const [cars, setCars] = useState([]);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    getCars();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

 

  const getCars = () => {
    fetch("https://carstockrest.herokuapp.com/cars")
      .then((response) => response.json())
      .then((data) => setCars(data._embedded.cars))
      .catch((err) => console.error(err));
  };

  const deleteCar = (params) => {
    if (window.confirm("Are you sure?")) {
      //console.log(params.value);
      fetch(params.value, {
        method: "DELETE",
      })
        //response
        .then(_ => getCars())
        .then(_ => handleOpen())
        .catch((err) => console.error(err));
    }
  };

  const saveCar = (newCar) => {
    fetch("https://carstockrest.herokuapp.com/cars", {
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCar)
      })
      .then(response => getCars())
      .catch(err => console.error(err)) 
}

  const columns = [
    { field: "brand", sortable: true, filter: true },
    { field: "model", sortable: true, filter: true },
    { field: "color", sortable: true, filter: true },
    { field: "fuel", sortable: true, filter: true },
    { field: "year", sortable: true, filter: true },
    { field: "price", sortable: true, filter: true },

    {
      headerName: "",
      field: "_links.self.href",
      width: 90,
      cellRendererFramework: (params) => (
        <IconButton color="secondary" onClick={() => deleteCar(params)}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      ),
    },
  ];

  return (
      <div>
    <div
      className="ag-theme-material"
      style={{ height: 600, width: "90%", margin: "auto" }}
    >
        <Addcar tallennaAuto={saveCar}/>
    
      <AgGridReact
        rowData={cars}
        columnDefs={columns}
        pagination="true"
        paginationPageSize="10"
      ></AgGridReact>
    </div>
    <Snackbar open={open}
    onClose={handleClose}
    autoHideDuration={2500}
    message="Auto poistettu"
    />
    </div>
  );
}
export default Carlist;
//<Addcar saveCars={saveCars}/>
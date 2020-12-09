import "./App.css";
import Carlist from "./components/Carlist";
//import Addcar from "./components/Addcar";
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography } from "@material-ui/core";

// npx create-react-app my-app
// cd my-app
// npm start
// npm install --save ag-grid-community ag-grid-react
// npm install @material-ui/core
// npm install @material-ui/icons

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant ="h6">
            Carshop
          </Typography>
        </Toolbar>
      </AppBar>
      <Carlist />
      
    </div>
  );
}

export default App;
//<Addcar/>
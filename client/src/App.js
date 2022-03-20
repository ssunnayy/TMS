import "./App.css";
import { Router } from "@reach/router";
import AddEquipment from "./components/AddEquipment";
import AllEquipment from "./components/AllEquipment";
import EditEquipment from "./components/EditEquipment";
import OneEquipment from "./components/OneEquipment";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      
      <Router>
        
        <AllEquipment path="/" /> 
        <AddEquipment path="/tms/new"/>
        <EditEquipment path="/tms/:id/edit" />
        <OneEquipment path="/tms/:id"/> 
        <Error path="/error" />
        
      </Router>
    </div>
  );
}

export default App;
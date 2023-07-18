import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Salecard from "../components/SaleCard";
import Categorydisplay from "../components/Categorydisplay";
function Homepage() {
  return (
    <div>
      <Navbar></Navbar>
      <Categorydisplay category="Popular Items"></Categorydisplay>
      <Categorydisplay category="Leather Work"></Categorydisplay>
      <Categorydisplay category="D&D Minis"></Categorydisplay>
      <Categorydisplay category="3D Prints"></Categorydisplay>
    </div>
    
  );
}

export default Homepage;

import { Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Salecard from "../components/SaleCard";

function Homepage() {
  return (
    <div>
      <Navbar></Navbar>
      <Salecard></Salecard>  
      <Salecard></Salecard>
    </div>
    
  );
}

export default Homepage;

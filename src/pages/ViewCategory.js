import { Button, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Salecard from "../components/SaleCard";
import Categorydisplay from "../components/Categorydisplay";
import axios from "axios";
import React, { useState } from 'react';
import { Link , useLocation} from "react-router-dom";


function ViewCategory() {
  const location = useLocation()
  console.log(location.state)
  const [category] = useState(location.state.category)
  

  return (

    <div style={{ display: 'flex', flexDirection: 'column', padding: '20px', alignItems: 'center' }}>
      <div>
        <Typography variant="h3" >{category}</Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 10% 0 10%', flexWrap: 'wrap' }}>
        <div style={{ marginBottom: '45px' }}>
          <Salecard category={category} id="000" component={Link} to="/product" />
        </div>
        <div style={{ marginBottom: '45px' }}>
          <Salecard category={category} id="001" component={Link} to="/product" />
        </div>
        <div style={{ marginBottom: '45px' }}>
          <Salecard category={category} id="002" component={Link} to="/product" />
        </div>
        <div style={{ marginBottom: '45px' }}>
          <Salecard category={category} id="003" component={Link} to="/product" />
        </div>

        <div style={{ marginBottom: '45px' }}>
          <Salecard category={category} id="000" component={Link} to="/product" />
        </div>
        <div style={{ marginBottom: '45px' }}>
          <Salecard category={category} id="001" component={Link} to="/product" />
        </div>
        <div style={{ marginBottom: '45px' }}>
          <Salecard category={category} id="002" component={Link} to="/product" />
        </div>
        <div style={{ marginBottom: '45px' }}>
          <Salecard category={category} id="003" component={Link} to="/product" />
        </div>


        <div style={{ marginBottom: '45px' }}>
          <Salecard category={category} id="000" component={Link} to="/product" />
        </div>
        <div style={{ marginBottom: '45px' }}>
          <Salecard category={category} id="001" component={Link} to="/product" />
        </div>
        <div style={{ marginBottom: '45px' }}>
          <Salecard category={category} id="002" component={Link} to="/product" />
        </div>
        <div style={{ marginBottom: '45px' }}>
          <Salecard category={category} id="003" component={Link} to="/product" />
        </div>
       

      </div>

    </div>
  );
}

export default ViewCategory;

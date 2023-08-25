import { Button, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Salecard from "../components/SaleCard";
import Categorydisplay from "../components/Categorydisplay";
import axios from "axios";
import React, { useState } from 'react';
import { Link } from "react-router-dom";


function ViewCategory() {
  const [response, setResponse] = useState("")

  const getTest = async () => {
    const request = await axios.get('http://localhost:8888/')
    console.log(request.data.text)
    setResponse(request.data.text)
  }

  return (


    <div style={{ display: 'flex', flexDirection: 'column', padding: '20px', alignItems: 'center' }}>
      <div>
        <Typography variant="h3" >Category Name</Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 10% 0 10%', flexWrap: 'wrap' }}>
        <Salecard category={"Leather Work"} id="000" component={Link} to="/product" />
        <Salecard category={"Leather Work"} id="001" component={Link} to="/product" />
        <Salecard category={"Leather Work"} id="002" component={Link} to="/product" />
        <Salecard category={"Leather Work"} id="003" component={Link} to="/product" />
        <Salecard category={"Leather Work"} id="000" component={Link} to="/product" />
        <Salecard category={"Leather Work"} id="001" component={Link} to="/product" />
        <Salecard category={"Leather Work"} id="002" component={Link} to="/product" />
        <Salecard category={"Leather Work"} id="003" component={Link} to="/product" />
        <Salecard category={"Leather Work"} id="000" component={Link} to="/product" />
        <Salecard category={"Leather Work"} id="001" component={Link} to="/product" />
        <Salecard category={"Leather Work"} id="002" component={Link} to="/product" />
        <Salecard category={"Leather Work"} id="003" component={Link} to="/product" />

      </div>

    </div>
  );
}

export default ViewCategory;

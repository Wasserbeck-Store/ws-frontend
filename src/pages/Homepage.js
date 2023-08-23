import { Button, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Salecard from "../components/SaleCard";
import Categorydisplay from "../components/Categorydisplay";
import axios from "axios";
import React, { useState } from 'react';

function Homepage() {
  const [response, setResponse] = useState("")

  const getTest = async () => {
    const request = await axios.get('http://localhost:8888/')
    console.log(request.data.text)
    setResponse(request.data.text)
  }

  return (
    <div>
      <div>
        <Button onClick={getTest}>GET request</Button>
        <Typography variant="h3">{response}</Typography>
      </div>
      <div>
        {/* <Categorydisplay category="Popular Items"></Categorydisplay> */}
        <Categorydisplay category="Leather Work"></Categorydisplay>
        <Categorydisplay category="D&D Minis"></Categorydisplay>
        <Categorydisplay category="3D Prints"></Categorydisplay>
      </div>
    </div>
  );
}

export default Homepage;

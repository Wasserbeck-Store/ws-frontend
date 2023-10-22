import { Button, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Salecard from "../components/SaleCard";
import Categorydisplay from "../components/Categorydisplay";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { BASE_IP } from "../constants";


function ViewCategory() {
  const location = useLocation()
  console.log(location.state)
  const [category] = useState(location.state.category)

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      const request = await axios.get(BASE_IP + "categoryProducts?category=" + category.replace("&","%26"))
      console.log(request.data)
      setProducts(Object.keys(request.data))

    }
    getProducts()
    console.log("------------------------------")
    console.log(products.map((product) => (product)))
    console.log("------------------------------")
  }, []

  )

  return (



    <div style={{ display: 'flex', flexDirection: 'column', padding: '20px', alignItems: 'center' }}>
      <div>
        <Typography variant="h3" >{category}</Typography>
      </div>

      

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 10% 0 10%', flexWrap: 'wrap' }}>

      {products.map((product) => (
        <Salecard category={category} id={product} component={Link} to="/product" />
      ))}
        

      </div>

    </div>
  );
}

export default ViewCategory;

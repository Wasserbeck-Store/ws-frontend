import { Typography } from "@mui/material";
import {Card, CardContent, CardMedia, CardActionArea, Chip} from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import logo from "./W.PNG"
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { BASE_IP } from '../constants';


function Salecard({title, overrideLogo, category, id, ...rest}) {
  const [description, setDescription] = useState("")
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  useEffect(() => {
    const getProduct = async () => {
      const request = await axios.get(BASE_IP + "product?id=" + id + "&category=" + category.replace("&","%26"))
      console.log(request.data)
      setDescription(request.data.description)
      setName(request.data.name)
      setPrice(request.data.price)
    }
    getProduct()
  },[]
  
  )
  
  
  return (
    
    <Card sx={{ maxWidth: 320, margin:'10px'}}>
      <CardActionArea {...rest} >

        <CardMedia
          component="img"
          height="140px"
          image={overrideLogo || logo}
          alt="W"
          sx={{objectFit:"contain"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Chip avatar={<AttachMoneyIcon/>} label={price} size="small" variant="outlined"/>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}

export default Salecard;

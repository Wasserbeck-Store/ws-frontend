import { Typography } from "@mui/material";
import {Card, CardContent, CardMedia, CardActionArea, Chip} from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import logo from "./W.PNG"


function Salecard({title, ...rest}) {
  return (
    <Card sx={{ maxWidth: 320, margin:'10px'}}>
      <CardActionArea {...rest}>

        <CardMedia
          component="img"
          height="140px"
          image={logo}
          alt="W"
          sx={{objectFit:"contain"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Chip avatar={<AttachMoneyIcon/>} label="20.00" size="small" variant="outlined"/>
          <Typography variant="body2" color="text.secondary">
            This is a wallet made of leather. You can tell its made of leather by the way its made of leather. The leather wallet knows its made of leather by the way it feels like leather.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}

export default Salecard;

import { Typography } from "@mui/material";
import {Card, CardContent, CardMedia, CardActionArea} from "@mui/material";
import logo from "./W.PNG"

function Salecard() {
  return (
    <Card sx={{ maxWidth: 320, margin:'10px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={logo}
          alt="W"
          sx={{objectFit:"contain"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Leather Wallet
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is a wallet made of leather. You can tell its made of leather by the way its made of leather. The leather wallet knows its made of leather by the way it feels like leather.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}

export default Salecard;

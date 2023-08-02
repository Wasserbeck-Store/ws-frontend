import Salecard from "./SaleCard";
import { Typography ,Button} from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import { Link } from "react-router-dom";


function Categorydisplay({category}) {
    const handleClick = () => {
        console.log("This will Navigate to the product Page");
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px',alignItems:'center'}}>
            <div style={{display:'flex', flexDirection:'row',width:'70%', justifyContent:'space-between'}}>
                <Typography variant="h3" >{category}</Typography>
                <Button variant="text" size="large" endIcon={<EastIcon/>} >See All</Button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
                <Salecard title="Leather Wallet" component={Link} to="/product" onClick={handleClick}/>
                <Salecard title="Leather Wallet" component={Link} to="/product"/>
                <Salecard title="Leather Wallet" component={Link} to="/product"/>
                <Salecard title="Leather Wallet" component={Link} to="/product"/>
            </div>

        </div>


    );
}

export default Categorydisplay;

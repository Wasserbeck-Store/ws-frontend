import Salecard from "./SaleCard";
import { Typography ,Button} from "@mui/material";
import EastIcon from '@mui/icons-material/East';

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

            <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
                <Salecard title="Leather Wallet" onClick={handleClick}/>
                <Salecard title="Leather Wallet"/>
                <Salecard title="Leather Wallet"/>
                <Salecard title="Leather Wallet"/>
            </div>

        </div>


    );
}

export default Categorydisplay;

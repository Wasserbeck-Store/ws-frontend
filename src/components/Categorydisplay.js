import Salecard from "./SaleCard";
import { Typography ,Button} from "@mui/material";
import EastIcon from '@mui/icons-material/East';

function Categorydisplay() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px',alignItems:'center', width:'100%'}}>
            <div style={{display:'flex', flexDirection:'row',width:'70%', justifyContent:'space-between'}}>
                <Typography variant="h3" >Category Name</Typography>
                <Button variant="text" size="large" endIcon={<EastIcon/>} >See All</Button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
                <Salecard />
                <Salecard />
                <Salecard />
                <Salecard />
            </div>

        </div>


    );
}

export default Categorydisplay;

import { display, flexbox } from "@mui/system";
import Salecard from "./SaleCard";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";
function Categorydisplay() {
    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <Typography>Category Name</Typography>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Salecard />
                <Salecard />
                <Salecard />
                <Salecard />

            </div>

        </div>


    );
}

export default Categorydisplay;

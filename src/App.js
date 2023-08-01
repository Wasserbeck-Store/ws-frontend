import { Button, Typography} from "@mui/material";
import {AppBar, Toolbar, IconButton} from "@mui/material";
import MenuIcon from '@mui/material/Menu'
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productpage from "./pages/Productpage";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Homepage />} />
            <Route path="product" element={<Productpage />} />
 
          </Route>
        </Routes>
    </BrowserRouter>
      
      
    </div>
  );
}

export default App;
  
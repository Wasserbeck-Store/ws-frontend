import { Button, Typography} from "@mui/material";
import {AppBar, Toolbar, IconButton} from "@mui/material";
import MenuIcon from '@mui/material/Menu'
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productpage from "./pages/Productpage";
import Cartpage from "./pages/Cartpage";
import Accountpage from "./pages/Accountpage";
import Orderspage from "./pages/Orderspage";
import Favoritespage from "./pages/Favoritespage";
import ViewCategory from "./pages/ViewCategory";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Homepage />} />
            <Route path="product" element={<Productpage />} />
            <Route path="cart" element={<Cartpage />} />
            <Route path="account" element={<Accountpage />} />
            <Route path="orders" element={<Orderspage />} />
            <Route path="favorites" element={<Favoritespage />} />
            <Route path="category" element={<ViewCategory />}/>
 
          </Route>
        </Routes>
    </BrowserRouter>
      
      
    </div>
  );
}

export default App;
  
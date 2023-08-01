import React from "react";
import Box from '@mui/material/Box';
import { Button, Typography } from "@mui/material";
import { AppBar, Toolbar, IconButton, Input, InputLabel, InputAdornment } from "@mui/material";
import MenuIcon from '@mui/material/Menu'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from "@mui/material/InputBase";
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Margin } from "@mui/icons-material";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from './W.PNG'
import { Outlet, Link } from "react-router-dom";


function Navbar() {

    return (
        <>
            <AppBar position="static">
                <Toolbar >
                    {/*Left Side of Nav Bar*/}
                    <Link to="/">
                        <img src={logo} alt="logo" style={{ width: '30px', height: '30px', marginRight: '5px' }} />
                    </Link>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                    >
                        Example Store
                    </Typography>
                    <Input
                        color="secondary"
                        id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        }
                        sx={{ marginLeft: 2 }}
                    />
                    <Box sx={{ flexGrow: 1 }} />

                    {/*End of Nav Bar*/}
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Link to="favorites">
                            <IconButton color="secondary" sx={{ marginLeft: '5px' }}>
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Link>

                        <Link to="orders">
                            <IconButton color="secondary" sx={{ marginLeft: '5px' }}>
                                <LocalShippingIcon />
                            </IconButton>
                        </Link>

                        <Link to="account">
                            <IconButton color="secondary" sx={{ marginLeft: '5px' }} >
                                <AccountCircle />
                            </IconButton>
                        </Link>

                        <Link to="cart">
                            <IconButton color="secondary" sx={{ marginLeft: '5px' }} >
                                <ShoppingCartIcon />
                            </IconButton>
                        </Link>



                    </Box>

                </Toolbar>
            </AppBar>

            <Outlet />

        </>
    );
}

export default Navbar;

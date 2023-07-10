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


function Navbar() {

    return (
        <AppBar position="static">
            <Toolbar >
                {/*Left Side of Nav Bar*/}
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                >
                    Example Store
                </Typography>
                <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    }
                    sx={{marginLeft:2}}
                />
                <Box sx={{ flexGrow: 1 }} />

                {/*End of Nav Bar*/}
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                    <AccountCircle />

                </Box>

            </Toolbar>
        </AppBar>
    );
}

export default Navbar;

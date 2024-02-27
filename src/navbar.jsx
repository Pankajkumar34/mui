import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { Avatar, Badge, Box, Toolbar, Typography, createTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { InputBase } from '@mui/material';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import EmailIcon from '@mui/icons-material/Email';
const StyleToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})
const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});
const Search = styled('div')({

    borderRadius: "10px",
    padding: "0 10px",
    width: "40%",
    display: "flex",
    gap: "10px"
})
const Icons = styled(Box)(({ theme })=>({
    display: "none",

    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up('sm')]:{
        display:"flex"
    }
}))
export const Navbar = () => {
    return (
        <AppBar position='sticky'>
            <StyleToolbar>
                <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
                    icon
                </Typography>
                <MenuIcon sx={{ display: { xs: "block", sm: "none" } }} />


                <Search>
                    <InputBase placeholder='search...' sx={{ width: "100%", background: "white", borderRadius: "10px", padding: "0 10px" }} />
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </Search>

                <Icons sx={{ display: { xs: "none", sm: "block" }, }}>
                    <Badge badgeContent={5}  >
                        <EmailIcon />
                    </Badge>
                    <Badge badgeContent={5}  >
                        <EmailIcon />
                    </Badge>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </Icons>
            </StyleToolbar>
        </AppBar>
    )
}

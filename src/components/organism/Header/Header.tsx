import React from 'react';
import { Avatar, Box, Link, Paper, Typography, Tabs, Tab } from '@mui/material';


export const Header = () => {
    return (
        <Box sx={{display: "flex", width: "100%", justifyContent: "center"}}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', maxWidth: 400, maxHeight: 75, justifyContent: "center", display: "flex", margin: 0 }}>
                <Tabs value={0} onChange={() => { }} aria-label="basic tabs example">
                    <Tab label="Home" />
                    <Tab label="Perfil" />
                </Tabs>
            </Box>
        </Box>


    )
}
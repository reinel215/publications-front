import React from 'react';
import { Box, Tabs } from '@mui/material';
import { LinkTab } from '../../atoms/LinkTab/LinkTab';
import { useUserDataStore } from '../../../store/user/userDataStore';
import { Roles } from '../../../types/User';






export const Header = () => {
    const [value, setValue] = React.useState(0);
    const user = useUserDataStore(state => state.user);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', maxWidth: 400, maxHeight: 75, justifyContent: "center", display: "flex", margin: 0 }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <LinkTab label="Home" href="/home" />
                    <LinkTab label="Perfil" href='/profile' />
                    {
                        user.role === Roles.ADMIN ? 
                        <LinkTab label="Admin" href='/administration' />
                        :
                        null
                    }
                </Tabs>
            </Box>
        </Box>


    )
}
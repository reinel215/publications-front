import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useUserDataStore } from '../../../store/user/userDataStore';
import { Roles } from '../../../types/User';


export const CreatePublicationButton = () => {
    const user = useUserDataStore(state => state.user);
    const history = useHistory();


    if (user?.role === Roles.ADMIN) {
        return null
    }

    return (

        <Button variant="text" onClick={() => history.push("/create-publication")}>
            + Crear publicacion
        </Button>


    )
}
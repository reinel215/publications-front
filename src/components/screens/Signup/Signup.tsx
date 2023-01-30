import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { signup, SingupParams } from '../../../services/userService/signup';
import { Input } from '../../atoms/Input/Input';
import { Box, Button, Link, Paper, Typography } from '@mui/material';
import validationRegister from '../../../helper/validationRegister';

export const Signup = () => {

    const { handleSubmit, control, formState } = useForm();
    const history = useHistory();

    const onSignup = async (user: SingupParams) => {
        try {
            await signup(user);
            history.push("/sigin");
        } catch (error) {
            console.error("Error", error);
        }
    }


    return (



        <Box alignItems="center" justifyContent="center" display="flex" flexDirection="column" gap="16px" sx={{ height: "100%" }} >

            <Paper variant="outlined" style={{ maxWidth: 400, padding: 12, width: "50%" }} >


                <Typography variant="h6" sx={{ marginBottom: "12px" }} textAlign="center">
                    Registrarse
                </Typography>


                <form onSubmit={handleSubmit(onSignup)} style={{}}>

                    <Box sx={{ display: "flex", gap: "10px", flexDirection: "column", justifyContent: "space-around" }}>

                        <Input
                            label='Nombre de usuario'
                            name='username'
                            control={control}
                            rules={{ ...validationRegister({ required: true, maxLength: 50}) }}
                            error={!!formState.errors.username}
                            helperText={formState.errors?.username?.message.toString()}
                        />

                        <Input
                            label='Nombre'
                            name='name'
                            control={control}
                            rules={{ ...validationRegister({ required: true, maxLength: 50}) }}
                            error={!!formState.errors.name}
                            helperText={formState.errors?.name?.message.toString()}
                        />

                        <Input
                            label='Apellido'
                            name='surname'
                            control={control}
                            rules={{ ...validationRegister({ required: true, maxLength: 50}) }}
                            error={!!formState.errors.surname}
                            helperText={formState.errors?.surname?.message.toString()}
                        />

                        <Input
                            label='Avatar'
                            name='avatar'
                            control={control}
                            rules={{ ...validationRegister({ required: true}) }}
                            error={!!formState.errors.avatar}
                            helperText={formState.errors?.avatar?.message.toString()}
                        />

                        <Button variant="text" type="submit">
                            Registrarse
                        </Button>

                        <Button variant="text" color="secondary" onClick={() => history.goBack()}>
                            Cancelar
                        </Button>

                    </Box>

                </form>


            </Paper>

        </Box>
    )
}
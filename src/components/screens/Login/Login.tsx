import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { login } from '../../../services/userService/login';
import { Input } from '../../atoms/Input/Input';
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, CircularProgress, Link, Paper, Typography } from '@mui/material';
import validationRegister from '../../../helper/validationRegister';


export const Login = () => {

    const { handleSubmit, control, formState } = useForm();
    const history = useHistory();
    const [loading, setLoading] = useState<Boolean>(false);


    const onLogin = async ({ username }: { username: string }) => {
        try {
            setLoading(true);
            const result = await login({ username });
            history.push("/home");
        } catch (error) {
            console.error("Error", error);
        } finally {
            setLoading(false);
        }
    }

    return (


        <Box alignItems="center" justifyContent="center" display="flex" flexDirection="column" gap="16px" sx={{ height: "100%" }} >

            <Paper variant="outlined" style={{ maxWidth: 400, padding: 12, width: "50%" }} >


                <Typography variant="h6" sx={{ marginBottom: "12px" }} textAlign="center">
                    Iniciar Sesión
                </Typography>


                <form onSubmit={handleSubmit(onLogin)} style={{}}>

                    <Box sx={{ display: "flex", gap: "10px", flexDirection: "column", justifyContent: "space-around" }}>

                        <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                            <Input
                                control={control}
                                name="username"
                                label='Nombre de usuario'
                                rules={{ ...validationRegister({ required: true, maxLength: 50 }) }}
                                error={!!formState.errors.username}
                                helperText={formState.errors?.username?.message.toString()}
                            />

                            <Box sx={{ display: "flex", justifyContent: "end" }}>
                                <RouterLink to="/signup" style={{ textDecoration: 'none' }}>
                                    <Link sx={{ textDecoration: "none", fontWeight: "bold" }} component="div">
                                        Registrarse
                                    </Link>
                                </RouterLink>
                            </Box>
                        </Box>


                        <Button variant="text" type="submit">
                            {
                                loading ?
                                    <CircularProgress />
                                    :
                                    "Iniciar"
                            }
                        </Button>

                    </Box>



                </form>


            </Paper>

        </Box>
    )
}
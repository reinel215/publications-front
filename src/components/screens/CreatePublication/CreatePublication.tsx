import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { createPublication } from '../../../services/publicationService/creatPublication';
import { CreatePostRequest, PostStatus } from '../../../types/Post';
import { Input } from '../../atoms/Input/Input';

export const CreatePublication = () => {


    const { handleSubmit, control } = useForm();
    const history = useHistory();

    const onCreatePublication = async (data: Omit<CreatePostRequest, "status">) => {
        try {
            const response = await createPublication({
                ...data,
                status: PostStatus.DRAFTED
            });

            history.push("/home")

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Box alignItems="center" justifyContent="start" display="flex" flexDirection="column" gap="16px" sx={{ height: "100%", marginTop: "20px" }} >

            <Paper variant="outlined" style={{ maxWidth: 400, padding: 12, width: "50%" }} >

                <Typography variant="h6" >
                    Crear Publicación
                </Typography>

                <form onSubmit={handleSubmit(onCreatePublication)}>

                    <Box sx={{ display: "flex", gap: "10px", flexDirection: "column" }}>
                        <Input
                            control={control}
                            name="image"
                            label='URL de la imagen'
                        />

                        <Input
                            control={control}
                            name="message"
                            label='Mensaje'
                            rows={4}
                            multiline
                        />


                        <Input
                            control={control}
                            name="location"
                            label='Lugar'
                        />


                        <Button variant="text" type="submit">
                            Crear
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
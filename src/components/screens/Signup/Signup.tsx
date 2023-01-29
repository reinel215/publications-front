import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { signup, SingupParams } from '../../../services/userService/signup';
import { Input } from '../../atoms/Input/Input';

export const Signup = () => {

    const { handleSubmit, control } = useForm();
    const history = useHistory();

    const onLogin = async (user: SingupParams) => {
        try {
            await signup(user);
            history.push("/sigin");
        } catch (error) {
            console.error("Error", error);
        }
    }


    return (
        <div>

            <form onSubmit={handleSubmit(onLogin)}>
                <Input
                    label='Nombre de usuario'
                    name='username'
                    control={control}
                />

                <Input
                    label='Nombre'
                    name='name'
                    control={control}
                />

                <Input
                    label='Apellido'
                    name='surname'
                    control={control}
                />


                <button type="submit">Registrar</button>

            </form>

        </div>
    )
}
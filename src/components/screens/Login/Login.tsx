import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { login } from '../../../services/userService/login';
import { Input } from '../../atoms/Input/Input';
import { Link } from "react-router-dom";


export const Login = () => {

    const { handleSubmit, control } = useForm();
    const history = useHistory();

    const onLogin = async ({ username }: { username: string }) => {
        try {
            const result = await login({ username });
            history.push("/home");
        } catch (error) {
            console.error("Error", error);
        }
    }

    return (
        <div>

            <form onSubmit={handleSubmit(onLogin)}>
                <Input
                    label='Username'
                    name='username'
                    control={control}
                />
                <button type="submit">Iniciar</button>
                <Link to="/signup">
                    Registrarse
                </Link>
            </form>

        </div>
    )
}
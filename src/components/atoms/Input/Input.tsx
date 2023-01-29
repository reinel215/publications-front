import React from "react";
import { TextField } from "@mui/material";
import { Control, Controller } from "react-hook-form"


interface InputProps {
    label: string;
    name: string;
    control: Control<any, any>;
    rules?: Object;
}


export const Input = ({ label, name, control, rules }: InputProps) => {
    return (
        <Controller
            control={control}
            rules={rules}
            render={({ field }) => {
                return (
                    <TextField
                        label={label}
                        size="small"
                        onChange={field.onChange}
                    />
                )
            }}
            name={name}
        />
    )
}
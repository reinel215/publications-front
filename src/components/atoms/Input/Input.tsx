import React from "react";
import { TextField } from "@mui/material";
import { Control, Controller } from "react-hook-form"


interface InputProps {
    label: string;
    name: string;
    control: Control<any, any>;
    rules?: Object;
    rows?: number;
    multiline?: boolean;
    error?: boolean;
    helperText?: string; 
}


export const Input = ({ label, name, control, rules, rows, multiline, error, helperText }: InputProps) => {
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
                        rows={rows}
                        multiline={multiline}
                        error={error}
                        helperText={helperText}
                    />
                )
            }}
            name={name}
        />
    )
}
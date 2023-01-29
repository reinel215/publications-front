import React from "react";
import "./App.css";
import { createTheme } from '@mui/material/styles';
import { Button, ThemeProvider } from "@mui/material";
import { Colors } from "../constants/Colors";
import { Switch, BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Login } from "./screens/Login/Login";
import PrivateRoute from "./atoms/PrivateRoute/PrivateRoute";


const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: Colors.primary,
            darker: '#053e85',
        },
        secondary: {
            main: Colors.secondary
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>

                    <Route exact path="/sigin">
                        <Login />
                    </Route>

                    <Route exact path="/signup">
                        <h1>SIGNUP</h1>
                    </Route>

                    <PrivateRoute path="/Home">
                        <h1>Home</h1>
                    </PrivateRoute>


                    <Redirect from="/" to="sigin" />
                    <Route path="*">
                        <h1>404 NOT FOUND</h1>
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    )
}
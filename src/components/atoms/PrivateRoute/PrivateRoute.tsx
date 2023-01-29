import React from 'react';
import { Route, Redirect } from 'react-router';
import { useUserDataStore } from '../../../store/user/userDataStore';

const PrivateRoute = ({ children, ...props }: any) => {

    const isAuth = useUserDataStore(state => state.isAuth)

    return (
        <React.Fragment>
            {isAuth ? <Route {...props} >{children}</Route> : <Redirect to="/" />}
        </React.Fragment>
    )
}

export default PrivateRoute

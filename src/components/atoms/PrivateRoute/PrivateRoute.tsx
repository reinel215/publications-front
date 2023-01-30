import React from 'react';
import { Route, Redirect } from 'react-router';
import { useUserDataStore } from '../../../store/user/userDataStore';

const PrivateRoute = ({ children, allowedRole ,...props }: any) => { //si le paso allowed role tomalo en cuenta en caso contrario no lo hagas

    const isAuth = useUserDataStore(state => state.isAuth)
    const user = useUserDataStore(state => state.user)


    return (
        <React.Fragment>
            {isAuth ? <Route {...props} >{children}</Route> : <Redirect to="/" />}
        </React.Fragment>
    )
}

export default PrivateRoute

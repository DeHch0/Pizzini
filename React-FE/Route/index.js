import React, { useState } from 'react';
import cookie from 'react-cookies';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    useLocation,
    Redirect
} from "react-router-dom";

const publicRoute = (routePath, cmp) => {
    return (
        <Route path={'/' + routePath} exact>
            {cmp}
        </Route>
    )

}

const protectedRoute = (routePath, cmp, isLogged) => {

    
}

const loggedProtectedRoutes = (routePath, cmp, isLogged) => {

}

export {
    protectedRoute,
    publicRoute,
    loggedProtectedRoutes
}
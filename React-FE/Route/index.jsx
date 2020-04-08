import React from 'react';
import {
    Route
} from "react-router-dom";

const publicRoute = (routePath, cmp) => {
    return (
        <Route path={'/' + routePath} exact>
            {cmp}
        </Route>
    )

}

export {
    publicRoute,
}
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Cart from "./Cart";
import { AppContext } from "../Context/AppContext";

function PrivateRoutes() {
    return (
        <AppContext.Consumer>
            {({ isAuth }) => {
                if (!isAuth) {
                    return <Redirect to="/login" />;
                }
                return (
                    <Switch>
                        <Route
                            path="/cart"
                            exact
                            render={(props) => <Cart {...props} />}
                        />
                    </Switch>
                );
            }}
        </AppContext.Consumer>
    );
}

export default PrivateRoutes;

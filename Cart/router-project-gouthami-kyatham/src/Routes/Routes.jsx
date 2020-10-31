import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from "../Components/Navbar"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Products from "./Products"
import Faq from "./Faq"
import Footer from "../Components/Footer"
import Shirts from "./Shirts"
import MoreDetails from "./MoreDetails"
import PrivateRoutes from "./PrivatesRoutes"
import Login from "./Login"
import WishList from "./WishList"

function Routes() {
    return (
        <>
            <Navbar />
            <Route path="/" exact component={Home} />
            <Switch>
                <Route path="/about-us" exact component={About} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/products" exact component={Products} />
                <Route path="/faq" exact component={Faq} />
                <Route path="/products/:item/:id" exact render={(props) => <Shirts {...props} />} />
                <Route
                    path="/product/:item/:id/sort/:orderBy(asc|desc)"
                    exact
                    render={(props) => <Shirts {...props} />}
                />
                <Route
                    path="/wishlist"
                    exact
                    render={(props) => (
                        <div>
                            <WishList {...props} />
                        </div>
                    )}
                />
                <Route path="/products/:item/:id/moredetails/:id1" exact render={(props) => <MoreDetails {...props} />} />
                <Route path="/login" exact render={() => <Login />} />
                <Route path="/cart" exact render={() => <PrivateRoutes />} />
                <Route render={() => <h1 style={{ textAlign: "center" }}>404 Not Found</h1>}></Route>
            </Switch>
            <Footer />
        </>
    )
}

export default Routes
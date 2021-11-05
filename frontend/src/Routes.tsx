import Home from "pages/Home";
import Dashboard from "pages/Home/Dashboard";
import { Route } from "react-router-dom"
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/Dashboard">
                    <Dashboard/>
                </Route>


            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
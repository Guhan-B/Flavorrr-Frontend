import { Switch, Route } from "react-router-dom";

import LandingPage from "../pages/Landing";
import RegisterPage from "../pages/Register";
import LoginPage from "../pages/Login";
import BrowsePage from "../pages/Browse";

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/recipes" component={BrowsePage} />
            <Route exact path="/" component={LandingPage} />
        </Switch>
    );
}

export default AppRouter;
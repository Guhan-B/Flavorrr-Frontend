import { Switch, Route } from "react-router-dom";

import LandingPage from "../pages/Landing";
import RegisterPage from "../pages/Register";
import LoginPage from "../pages/Login";
import BrowsePage from "../pages/Browse";
import ProfilePage from "../pages/Profile";
import CollectionPage from "../pages/Collection"

const AppRouter = () => {
    return (
        <Switch>
            <Route path="/sign-in" component={LoginPage} />
            <Route path="/sign-up" component={RegisterPage} />
            <Route path="/search" component={BrowsePage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/collection/:id" component={CollectionPage} />
            <Route exact path="/" component={LandingPage} />
        </Switch>
    );
}

export default AppRouter;
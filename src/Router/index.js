import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import Navigation from "../components/Navigation";
import LandingPage from "../pages/Landing";
import RegisterPage from "../pages/Register";
import LoginPage from "../pages/Login";
import BrowsePage from "../pages/Browse";
import ProfilePage from "../pages/Profile";
import EditProfilePage from "../pages/EditProfile";
import CollectionPage from "../pages/Collection";
import RecipePage from "../pages/Recipe";
import UploadPage from "../pages/Upload";

const AppRouter = (props) => {
    const location = useLocation();

    return (
        <>
            {
                (location.pathname != "/" && location.pathname != "/sign-in" && location.pathname != "/sign-up")?
                <Navigation />:null
            }
            <Switch>
                <Route path="/sign-in" component={LoginPage} />
                <Route path="/sign-up" component={RegisterPage} />
                <Route path="/search" component={BrowsePage} />
                <Route path="/profile/edit" component={EditProfilePage} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/collection/:id" component={CollectionPage} />
                <Route path="/recipe/:id" component={RecipePage} />
                <Route path="/upload" component={UploadPage}/>
                <Route exact path="/" component={LandingPage} />
            </Switch>
        </>
    );
}

export default AppRouter;
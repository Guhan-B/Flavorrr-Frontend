import { withRouter } from "react-router-dom";

import OutlineButton from "../OutlineButton";

import styles from "./styles.module.css";
import LOGO from "../../assets/Flavorrr.svg";

function Navigation(props) {
    return (
        <nav className={styles.nav}>
            <img src={LOGO} alt="Flavorrr" />
            <div>
                <a href="">Home</a>
                <a href="">Recipes</a>
                <a href="">Trending</a>
                <OutlineButton
                    onClick={() => props.history.push('/login')}
                    type="button"
                    title="Login"
                />
            </div>
        </nav>
    )
}

export default withRouter(Navigation);

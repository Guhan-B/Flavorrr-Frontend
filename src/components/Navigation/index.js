import { withRouter } from "react-router-dom";


import TextInput from "../TextInput";
import OutlineButton from "../OutlineButton"

import styles from "./styles.module.css";
import LOGO from "../../assets/Flavorrr.svg";
import SEARCH_ICON from "../../assets/icons/Search.svg";
import PROFILE from "../../assets/images/person.jpg";
import SIGNOUT_ICON from "../../assets/icons/Visit.svg";
import UPLOAD_ICON from "../../assets/icons/Plus.svg";
import CHAT_ICON from "../../assets/icons/Chat.svg";

function Navigation(props) {
    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <img className={styles.logo} src={LOGO} alt="Flavorrr" />
            </div>
            <div className={styles.search}>
                <TextInput className={styles.input} icon={SEARCH_ICON} placeholder="Search Recipes" />
                <div className={styles.search_autocomplete}>
                    <p>Red sauce pasta</p>
                    <p>Pan fried momos</p>
                    <p>Aglio e olio</p>
                    <p>Masala dosa</p>
                </div>
            </div>
            {/* this commented code will switch dynamically based on authentication */}
            {/* <div className={styles.right}>
                <OutlineButton
                    onClick={() => props.history.push('/sign-up')}
                    type="button"
                    title="Sign In"
                />
            </div> */}
            <div className={styles.right}>
                <button className={styles.icon_button} onClick={() => props.history.push('/')}>
                    <img src={UPLOAD_ICON} alt="icon" />
                </button>
                <button className={styles.icon_button} onClick={() => props.history.push('/')}>
                    <img src={CHAT_ICON} alt="icon" />
                </button>
                <button className={styles.icon_button} onClick={() => props.history.push('/')}>
                    <img src={SIGNOUT_ICON} alt="icon" />
                </button>
                <button className={styles.profile} onClick={() => props.history.push('/profile')}>
                    <img src={PROFILE} />
                </button>
            </div>
        </nav>
    )
}

export default withRouter(Navigation);

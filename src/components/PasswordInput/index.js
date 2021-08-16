import React from "react";

import styles from "./styles.module.css";

import LOCK from "../../assets/icons/Lock.svg";
import HIDDEN_EYE from "../../assets/icons/Hide.svg";
import VISIBLE_EYE from "../../assets/icons/Show.svg";

function PasswordInput(props) {
    const [visible, setVisible] = React.useState(false);
    return (
        <div className={styles.input_group}>
            <img className={styles.icon} src={LOCK} alt="icon" />
            <div className={styles.input_area}>
                <input type={visible ? "text" : "password"} placeholder={props.placeholder} />
                {visible && <img alt="visible" className={styles.eye} src={VISIBLE_EYE} onClick={() => setVisible(false)} />}
                {!visible && <img alt="hidden" className={styles.eye} src={HIDDEN_EYE} onClick={() => setVisible(true)} />}
            </div>
        </div>
    )
}

export default PasswordInput;

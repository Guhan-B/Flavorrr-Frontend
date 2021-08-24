import React from "react";

import styles from "./styles.module.css";

import LOCK from "../../assets/icons/Lock.svg";
import HIDDEN_EYE from "../../assets/icons/Hide.svg";
import VISIBLE_EYE from "../../assets/icons/Show.svg";

function PasswordInput(props) {
    const [visible, setVisible] = React.useState(false);
    const [inputStyle, setInputStyle] = React.useState({
        backgroundColor: "var(--grey-light-color)",
    });

    const onTextInputFocus = (e) => {
        setInputStyle({
            backgroundColor: "var(--white-color)",
            boxShadow: "0 0 0 4px rgba(255, 128, 93, 0.1)",
            border: "1px solid var(--primary-light-color)"
        })
    }
    const onTextInputBlur = (e) => {
        setInputStyle({
            backgroundColor: "var(--grey-light-color)",
            boxShadow: "none",
            border: "1px solid transparent"
        })
    }
    return (
        <div style={inputStyle} className={styles.input_group}>
            <img className={styles.icon} src={LOCK} alt="icon" />
            <div className={styles.input_area}>
                <input type={visible ? "text" : "password"} placeholder={props.placeholder} onFocus={onTextInputFocus} onBlur={onTextInputBlur}/>
                {visible ? <img alt="visible" className={styles.eye} src={VISIBLE_EYE} onClick={() => setVisible(false)} /> :
                    <img alt="hidden" className={styles.eye} src={HIDDEN_EYE} onClick={() => setVisible(true)} />}
            </div>
        </div>
    )
}

export default PasswordInput;

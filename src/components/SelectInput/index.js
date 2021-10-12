import React from "react";
import styles from "./styles.module.css";

function SelectInput(props) {
    const [inputStyle, setInputStyle] = React.useState({
        backgroundColor: "var(--grey-light-color)",
    });

    const [showOptions, setShowOptions] = React.useState(false);

    const onSelectInputFocus = (e) => {
        setInputStyle({
            backgroundColor: "var(--white-color)",
            boxShadow: "0 0 0 4px rgba(255, 128, 93, 0.1)",
            border: "1px solid var(--primary-light-color)"
        })
        setShowOptions(true);
    }
    const onSelectInputBlur = (e) => {
        setInputStyle({
            backgroundColor: "var(--grey-light-color)",
            boxShadow: "none",
            border: "1px solid transparent"
        })
        setShowOptions(false);
    }

    return (
        <div style={inputStyle} className={styles.input_group}>
            {props.icon && <img className={styles.icon} src={props.icon} alt="icon" />}
            <div className={styles.input_area}>
                <input type="text" placeholder={props.placeholder} onFocus={onSelectInputFocus} onBlur={onSelectInputBlur} />
            </div>
            {props.postfix && <span className={styles.postfix}>{props.postfix}</span>}
            {
                showOptions &&
                <ul className={styles.options}>
                    <li>Option 1</li>
                    <li>Option 1</li>
                    <li>Option 1</li>
                    <li>Option 1</li>
                    <li>Option 1</li>
                    <li>Option 1</li>
                    <li>Option 1</li>
                </ul>
            }
        </div>
    )
}

export default SelectInput;

import React from "react";
import styles from "./styles.module.css";

function TextareaInput(props) {
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
            <textarea type="text" placeholder={props.placeholder} onFocus={onTextInputFocus} onBlur={onTextInputBlur} />
        </div>
    )
}

export default TextareaInput;

import React from "react";
import styles from "./styles.module.css";

function SelectInput(props) {
    const [inputStyle, setInputStyle] = React.useState({
        backgroundColor: "var(--grey-light-color)",
    });

    const [showOptions, setShowOptions] = React.useState(false);

    const [value, setValue] = React.useState("");

    const onSelectInputFocus = (e) => {
        setInputStyle({
            backgroundColor: "var(--white-color)",
            boxShadow: "0 0 0 4px rgba(255, 128, 93, 0.1)",
            border: "1px solid var(--primary-light-color)"
        })
        setShowOptions(true);
    }
    const onSelectInputBlur = (e) => {
        console.log(ref);
        setInputStyle({
            backgroundColor: "var(--grey-light-color)",
            boxShadow: "none",
            border: "1px solid transparent"
        })
    }
    const onChange = (e) => {
        console.log("changed");
        setValue(e.target.value);
    }

    const ref = React.useRef();

    // Check for onBlur problem here

    return (
        <div style={inputStyle} className={styles.input_group}>
            {props.icon && <img className={styles.icon} src={props.icon} alt="icon" />}
            <div className={styles.input_area}>
                <input
                    ref={ref}
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder={props.placeholder}
                    onFocus={onSelectInputFocus}
                    onBlur={onSelectInputBlur}
                />
            </div>
            {props.postfix && <span className={styles.postfix}>{props.postfix}</span>}
            {
                showOptions &&
                <ul id="options" className={styles.options} onBlur={() => console.log("HEHE")}>
                    {
                        props.options.map(
                            option => <li key={option.label} onClick={(e) => {
                                console.log(option.value)
                                setValue(option.value)
                                setShowOptions(false);
                            }}>{option.label}</li>
                        )
                    }
                </ul>
            }
        </div>
    )
}

export default SelectInput;

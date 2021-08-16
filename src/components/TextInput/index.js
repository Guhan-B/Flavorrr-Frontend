import styles from "./styles.module.css";

function TextInput(props) {
    return (
        <div className={styles.input_group}>
            {props.icon && <img className={styles.icon} src={props.icon} alt="icon"/>}
            <div className={styles.input_area}>
                <input type="text" placeholder={props.placeholder} />
            </div>
        </div>
    )
}

export default TextInput;

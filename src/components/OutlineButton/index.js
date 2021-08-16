import styles from "./styles.module.css";

function OutlineButton(props) {
    return (
        <button className={styles.button} type={props.type} onClick={props.onClick}>
            {props.title}
        </button>
    )
}

export default OutlineButton;

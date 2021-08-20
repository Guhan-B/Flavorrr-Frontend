import styles from "./styles.module.css";

function OutlineButton(props) {
    return (
        <button className={styles.button} type={props.type} onClick={props.onClick}>
            {props.icon && <img src={props.icon} />}
            <p>{props.title}</p>
        </button>
    )
}

export default OutlineButton;

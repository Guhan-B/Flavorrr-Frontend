import styles from "./styles.module.css";

function PrimaryButton(props) {
    return (
        <button className={styles.button} type={props.type} onClick={props.onClick}>
            {props.title}
        </button>
    )
}

export default PrimaryButton

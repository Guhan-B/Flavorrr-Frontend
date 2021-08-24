import styles from "./styles.module.css";

function PrimaryButton(props) {
    const classes = [styles.button, styles[props.type]].join(" ");
    return (
        <button className={classes} type={props.type} onClick={props.onClick}>
            {props.title}
        </button>
    )
}

export default PrimaryButton
